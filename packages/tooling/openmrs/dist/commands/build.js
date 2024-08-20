"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBuild = void 0;
const fs_1 = require("fs");
const utils_1 = require("../utils");
const path_1 = require("path");
function loadBuildConfig(buildConfigPath) {
    if (buildConfigPath) {
        return JSON.parse((0, fs_1.readFileSync)(buildConfigPath, 'utf8'));
    }
    else {
        return {};
    }
}
function addConfigFilesFromPaths(configPaths, targetDir) {
    for (let configPath of configPaths) {
        const realPath = (0, path_1.resolve)(configPath);
        (0, fs_1.copyFileSync)(realPath, (0, path_1.join)(targetDir, (0, path_1.basename)(configPath)));
    }
}
async function runBuild(args) {
    const webpack = require('webpack');
    const buildConfig = loadBuildConfig(args.buildConfig);
    const configUrls = buildConfig.configUrls || args.configUrls;
    for (let configPath of buildConfig.configPaths || args.configPaths) {
        configUrls.push((0, path_1.basename)(configPath));
    }
    const importMap = await (0, utils_1.getImportMap)(args.importmap || buildConfig.importmap || 'importmap.json');
    // if we're supplying a URL importmap and the dist folder exists and the raw importmap file doesn't exist
    // we use the nearest thing. Basically, this is added to support the --hash-importmap assemble option.
    if (importMap.type === 'url') {
        if (!/^https?:\/\//.test(importMap.value) &&
            (0, fs_1.existsSync)(args.target) &&
            !(0, fs_1.existsSync)((0, path_1.resolve)(args.target, (0, path_1.basename)(importMap.value)))) {
            const { name: fileName, ext: extension } = (0, path_1.parse)(importMap.value);
            const paths = (0, fs_1.readdirSync)(args.target).filter((entry) => entry.startsWith(fileName) &&
                entry.endsWith(extension) &&
                (0, fs_1.statSync)((0, path_1.resolve)(args.target, entry)).isFile() &&
                (0, utils_1.checkImportmapJson)((0, fs_1.readFileSync)((0, path_1.resolve)(args.target, entry)).toString()));
            if (paths) {
                importMap.value = importMap.value.replace(/importmap\.json/i, paths[0]);
            }
        }
    }
    const routes = await (0, utils_1.getRoutes)(args.routes || buildConfig.routes || 'routes.registry.json');
    // As above, check for a hashed routes.registry.json if --hash-importmap assmeble option was used
    if (routes.type === 'url') {
        if (!/^https?:\/\//.test(routes.value) &&
            (0, fs_1.existsSync)(args.target) &&
            !(0, fs_1.existsSync)((0, path_1.resolve)(args.target, routes.value))) {
            const { name: fileName, ext: extension } = (0, path_1.parse)(routes.value);
            const paths = (0, fs_1.readdirSync)(args.target).filter((entry) => entry.startsWith(fileName) &&
                entry.endsWith(extension) &&
                (0, fs_1.statSync)((0, path_1.resolve)(args.target, entry)).isFile() &&
                (0, utils_1.checkRoutesJson)((0, fs_1.readFileSync)((0, path_1.resolve)(args.target, entry)).toString()));
            if (paths) {
                routes.value = routes.value.replace(/routes\.registry\.json/i, paths[0]);
            }
        }
    }
    const config = (0, utils_1.loadWebpackConfig)({
        importmap: importMap,
        routes,
        env: 'production',
        apiUrl: buildConfig.apiUrl || args.apiUrl,
        configUrls: configUrls,
        defaultLocale: args.defaultLocale || buildConfig.defaultLocale,
        pageTitle: buildConfig.pageTitle || args.pageTitle,
        supportOffline: buildConfig.supportOffline ?? args.supportOffline,
        spaPath: buildConfig.spaPath || args.spaPath,
        fresh: args.fresh ?? false,
    });
    (0, utils_1.logInfo)(`Running build process ...`);
    const compiler = webpack({
        ...config,
        output: {
            ...config.output,
            path: args.target,
        },
    });
    return await new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err || stats?.hasErrors()) {
                reject(err ?? new Error(stats?.compilation.errors.toString()));
            }
            else {
                stats &&
                    console.log(stats.toString({
                        colors: true,
                    }));
                addConfigFilesFromPaths(buildConfig.configPaths || args.configPaths, args.target);
                (0, utils_1.logInfo)(`Build finished.`);
                resolve();
            }
        });
    });
}
exports.runBuild = runBuild;
