"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAssemble = void 0;
const promises_1 = require("fs/promises");
const fs_1 = require("fs");
const path_1 = require("path");
const stream_1 = require("stream");
const inquirer_1 = require("inquirer");
const rimraf_1 = __importDefault(require("rimraf"));
const axios_1 = __importDefault(require("axios"));
const npm_registry_fetch_1 = __importDefault(require("npm-registry-fetch"));
const pacote_1 = __importDefault(require("pacote"));
const semver_1 = __importDefault(require("semver"));
const merge_1 = __importDefault(require("lodash/merge"));
const utils_1 = require("../utils");
const npmConfig_1 = require("../utils/npmConfig");
async function readConfig(mode, configs, fetchOptions) {
    switch (mode) {
        // curly-braces are here to add a lexical scope which allows us to safely
        // declare variables
        case 'config': {
            if (configs.length === 0) {
                configs = [(0, path_1.resolve)(process.cwd(), 'spa-build-config.json')];
            }
            const results = {
                configs: [],
                errors: [],
            };
            for (const config of configs) {
                if (!(0, fs_1.existsSync)(config)) {
                    results.errors.push(new Error(`Could not find the config file "${config}".`));
                    continue;
                }
                (0, utils_1.logInfo)(`Reading configuration ${config} ...`);
                results.configs.push({
                    ...JSON.parse(await (0, promises_1.readFile)(config, 'utf8')),
                });
            }
            if (results.errors.length > 0) {
                throw new Error(results.errors.reduce((str, e, idx) => {
                    if (idx > 0) {
                        str += '\n\n';
                    }
                    return str + e.message;
                }, ''));
            }
            return results.configs.reduce((config, newConfig) => {
                // excludes are processed for each config in turn; this ensure that modules removed in one config can
                // be added back by providing another config override
                if (Array.isArray(newConfig.frontendModuleExcludes)) {
                    newConfig.frontendModuleExcludes.forEach((exclude) => {
                        typeof exclude === 'string' && config.frontendModules[exclude] && delete config.frontendModules[exclude];
                    });
                }
                if (newConfig.frontendModules) {
                    config.frontendModules = { ...config.frontendModules, ...newConfig.frontendModules };
                }
                return config;
            });
        }
        case 'survey': {
            (0, utils_1.logInfo)(`Loading available frontend modules ...`);
            const packages = await npm_registry_fetch_1.default
                // see https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md#get-v1search for what these
                // options mean; in essence, we search for anything with the keyword openmrs that has at least one
                // stable version; quality is down-scored because that metric favours smaller apps over core
                // community assets. Maintenance is boosted to de-score relatively unmaintained apps, as the framework
                // still has a fair bit of churn
                .json(`/-/v1/search?text=app%20keywords:openmrs&not:unstable&quality=0.001&maintenance=3.0&size=250`, fetchOptions)
                .then((res) => res.objects
                .map((m) => ({
                name: m.package.name,
                version: m.package.version,
            }))
                .filter((m) => m.name.endsWith('-app')));
            const questions = [];
            for (const pckg of packages) {
                questions.push({
                    name: pckg.name,
                    message: `Include frontend module "${pckg.name}"?`,
                    default: false,
                    type: 'confirm',
                }, {
                    name: pckg.name,
                    message: `Version for "${pckg.name}"?`,
                    default: pckg.version,
                    type: 'string',
                    when: (ans) => ans[pckg.name],
                    validate: (input) => {
                        if (typeof input !== 'string') {
                            return `Expected a valid SemVer string, got ${typeof input}.`;
                        }
                        if (!semver_1.default.valid(input)) {
                            return `${input} does not appear to be a valid semver or version range. See https://semver.npmjs.com/#syntax-examples.`;
                        }
                        return true;
                    },
                });
            }
            const answers = await (0, inquirer_1.prompt)(questions);
            return {
                publicUrl: '.',
                frontendModules: Object.keys(answers)
                    .filter((m) => answers[m])
                    .reduce((prev, curr) => {
                    prev[curr] = answers[curr];
                    return prev;
                }, {}),
            };
        }
    }
    return {
        frontendModules: {},
        publicUrl: '.',
    };
}
async function downloadPackage(esmName, esmVersion, baseDir, fetchOptions) {
    if (esmVersion.startsWith('file:')) {
        const source = (0, path_1.resolve)(baseDir, esmVersion.substring(5));
        return (0, promises_1.readFile)(source);
    }
    else if (/^https?:\/\//.test(esmVersion)) {
        const response = await axios_1.default.get(esmVersion);
        return response.data;
    }
    else {
        const packageName = `${esmName}@${esmVersion}`;
        const tarManifest = await pacote_1.default.manifest(packageName, fetchOptions);
        if (!Boolean(tarManifest) || !Boolean(tarManifest._resolved) || !Boolean(tarManifest._integrity)) {
            throw new Error(`Failed to load manifest for ${packageName} from registry ${fetchOptions.registry}`);
        }
        return pacote_1.default.tarball(tarManifest._resolved, {
            ...fetchOptions,
            integrity: tarManifest._integrity,
        });
    }
}
async function extractFiles(buffer, targetDir) {
    const packageRoot = 'package';
    const rs = stream_1.Readable.from(buffer);
    const files = await (0, utils_1.untar)(rs);
    const packageJson = JSON.parse(files[`${packageRoot}/package.json`].toString('utf8'));
    const version = packageJson.version ?? '0.0.0';
    const entryModule = packageJson.browser ?? packageJson.module ?? packageJson.main;
    const fileName = (0, path_1.basename)(entryModule);
    const sourceDir = (0, path_1.dirname)(entryModule);
    let outputDir = `${targetDir}-${version}`;
    await (0, promises_1.mkdir)(outputDir, { recursive: true });
    await Promise.all(Object.keys(files)
        .filter((m) => m.startsWith(`${packageRoot}/${sourceDir}`))
        .map(async (m) => {
        const content = files[m];
        const fileName = m.replace(`${packageRoot}/${sourceDir}/`, '');
        const targetFile = (0, path_1.resolve)(outputDir, fileName);
        await (0, promises_1.mkdir)((0, path_1.dirname)(targetFile), { recursive: true });
        await (0, promises_1.writeFile)(targetFile, content);
    }));
    return [fileName, version];
}
async function runAssemble(args) {
    const npmConf = (0, npmConfig_1.getNpmRegistryConfiguration)(args.registry);
    const config = await readConfig(args.mode, args.config, npmConf);
    const importmap = {
        imports: {},
    };
    const versionManifest = {
        coreVersion: require((0, path_1.resolve)(__dirname, '..', '..', 'package.json')).version,
        frontendModules: {},
    };
    const routes = {};
    (0, utils_1.logInfo)(`Assembling dependencies and building import map and routes registry...`);
    const { frontendModules = {}, publicUrl = '.' } = config;
    if (args.fresh && (0, fs_1.existsSync)(args.target)) {
        await new Promise((resolve) => (0, rimraf_1.default)(args.target, resolve));
    }
    await (0, promises_1.mkdir)(args.target, { recursive: true });
    await Promise.all(Object.keys(frontendModules).map(async (esmName) => {
        const esmVersion = frontendModules[esmName];
        const tgzBuffer = await downloadPackage(esmName, esmVersion, process.cwd(), npmConf);
        const baseDirName = `${esmName}`.replace(/^@/, '').replace(/\//, '-');
        const [fileName, version] = await extractFiles(tgzBuffer, (0, path_1.resolve)(args.target, baseDirName));
        const dirName = `${baseDirName}-${version}`;
        const appRoutes = (0, path_1.resolve)(args.target, dirName, 'routes.json');
        if ((0, fs_1.existsSync)(appRoutes)) {
            try {
                routes[esmName] = JSON.parse(await (0, promises_1.readFile)(appRoutes, 'utf8'));
                routes[esmName]['version'] = version;
            }
            catch (e) {
                (0, utils_1.logWarn)(`Error while processing routes for ${esmName} using ${appRoutes}: ${e}`);
            }
        }
        else {
            (0, utils_1.logWarn)(`Routes file ${appRoutes} does not exist. We expect that routes file to be defined by ${esmName}. Note that this means that no pages or extensions for ${esmName} will be available.`);
            if (routes.hasOwnProperty(esmName)) {
                delete routes[esmName];
            }
        }
        importmap.imports[esmName] = `${publicUrl}/${dirName}/${fileName}`;
        versionManifest.frontendModules[esmName] = version;
    }));
    await (0, promises_1.writeFile)((0, path_1.resolve)(args.target, `importmap${args.hashFiles ? '.' + (0, utils_1.contentHash)(importmap) : ''}.json`), JSON.stringify(importmap), 'utf8');
    if (args.buildRoutes) {
        await (0, promises_1.writeFile)((0, path_1.resolve)(args.target, `routes.registry${args.hashFiles ? '.' + (0, utils_1.contentHash)(routes) : ''}.json`), JSON.stringify(routes), 'utf-8');
    }
    if (args.configFiles && args.configFiles.length > 0) {
        const assembledConfig = args.configFiles.reduce(async (merged, file) => {
            try {
                const config = JSON.parse((await (0, promises_1.readFile)(file), 'utf8'));
                return (0, merge_1.default)(merged, config);
            }
            catch (e) {
                (0, utils_1.logWarn)(`Error while processing config file ${file}: ${e}`);
            }
            return merged;
        }, {});
        await (0, promises_1.writeFile)((0, path_1.resolve)(args.target, `openmrs-config${args.hashFiles ? '.' + (0, utils_1.contentHash)(assembledConfig) : ''}.json`), JSON.stringify(assembledConfig), 'utf8');
    }
    if (args.manifest) {
        await (0, promises_1.writeFile)((0, path_1.resolve)(args.target, 'spa-assemble-config.json'), JSON.stringify(versionManifest), 'utf8');
    }
    (0, utils_1.logInfo)(`Finished assembling frontend distribution`);
}
exports.runAssemble = runAssemble;
