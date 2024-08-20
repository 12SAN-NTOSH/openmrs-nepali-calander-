"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyImportmapAndRoutes = exports.getRoutes = exports.getImportMap = exports.getImportmapAndRoutes = exports.mergeImportmapAndRoutes = exports.runProject = exports.checkRoutesJson = exports.checkImportmapJson = void 0;
const axios_1 = __importDefault(require("axios"));
const glob_1 = __importDefault(require("glob"));
const node_url_1 = require("node:url");
const node_path_1 = require("node:path");
const node_fs_1 = require("node:fs");
const child_process_1 = require("child_process");
const logger_1 = require("./logger");
const webpack_1 = require("./webpack");
const dependencies_1 = require("./dependencies");
async function readImportmap(path, backend, spaPath) {
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return fetchRemoteImportmap(path);
    }
    else if (path === 'importmap.json') {
        if (backend && spaPath) {
            try {
                return await fetchRemoteImportmap(`${backend}${spaPath}importmap.json`);
            }
            catch (e) {
                (0, logger_1.logWarn)(`Could not read importmap from ${backend}${spaPath}importmap.json. Falling back to import map from https://dev3.openmrs.org/openmrs/spa/importmap.json: ${e}`);
            }
        }
        return fetchRemoteImportmap('https://dev3.openmrs.org/openmrs/spa/importmap.json');
    }
    return '{"imports":{}}';
}
async function readRoutes(path, backend, spaPath) {
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return fetchRemoteRoutes(path);
    }
    else if (path === 'routes.registry.json') {
        if (backend && spaPath) {
            try {
                return await fetchRemoteRoutes(`${backend}${spaPath}routes.registry.json`);
            }
            catch (e) {
                (0, logger_1.logWarn)(`Could not read routes registry from ${backend}${spaPath}routes.registry.json. Falling back to routes registry from https://dev3.openmrs.org/openmrs/spa/routes.registry.json: ${e}`);
            }
        }
        return fetchRemoteRoutes('https://dev3.openmrs.org/openmrs/spa/routes.registry.json');
    }
    return '{}';
}
async function fetchRemoteImportmap(fetchUrl) {
    return await axios_1.default
        .get(fetchUrl)
        .then((res) => res.data)
        .then((m) => (typeof m === 'string' ? JSON.parse(m) : m))
        .then((m) => {
        if (typeof m === 'object' && 'imports' in m) {
            Object.keys(m.imports).forEach((key) => {
                const url = m.imports[key];
                if (typeof url === 'string') {
                    m.imports[key] = new node_url_1.URL(url, fetchUrl).href;
                }
            });
        }
        return m;
    })
        .then((m) => JSON.stringify(m));
}
async function fetchRemoteRoutes(fetchUrl) {
    return await axios_1.default
        .get(fetchUrl)
        .then((res) => res.data)
        .then((m) => (typeof m === 'string' ? JSON.parse(m) : m))
        .then((m) => JSON.stringify(m));
}
function checkImportmapJson(value) {
    try {
        const content = JSON.parse(value);
        return typeof content === 'object' && typeof content.imports === 'object';
    }
    catch {
        return false;
    }
}
exports.checkImportmapJson = checkImportmapJson;
function checkRoutesJson(value) {
    try {
        const content = JSON.parse(value);
        return (typeof content === 'object' &&
            Object.entries(content).every(([key, value]) => typeof key === 'string' && typeof value === 'object'));
    }
    catch {
        return false;
    }
}
exports.checkRoutesJson = checkRoutesJson;
async function matchAny(baseDir, patterns) {
    const matches = [];
    await Promise.all(patterns.map((pattern) => new Promise((resolve, reject) => {
        (0, glob_1.default)(pattern, {
            cwd: baseDir,
        }, (err, files) => {
            if (err) {
                reject(err);
            }
            else {
                matches.push(...files);
                resolve();
            }
        });
    })));
    return matches;
}
const defaultConfigPath = (0, node_path_1.resolve)(__dirname, '..', '..', 'default-webpack-config.js');
function runProjectWebpack(configPath, port, project, sourceDirectory, importMap, routes) {
    const bundle = (0, dependencies_1.getMainBundle)(project);
    const host = `http://localhost:${port}`;
    (0, webpack_1.startWebpack)(configPath, port, sourceDirectory);
    importMap[project.name] = `${host}/${bundle.name}`;
    routes[project.name] = (0, dependencies_1.getAppRoutes)(sourceDirectory, project);
}
async function runProject(basePort, sourceDirectoryPatterns) {
    const baseDir = process.cwd();
    const sourceDirectories = await matchAny(baseDir, sourceDirectoryPatterns);
    const importMap = {};
    const routes = {};
    const watchedRoutesPaths = {};
    (0, logger_1.logInfo)('Loading dynamic import map and routes ...');
    for (let i = 0; i < sourceDirectories.length; i++) {
        const sourceDirectory = (0, node_path_1.resolve)(baseDir, sourceDirectories[i]);
        const projectFile = (0, node_path_1.resolve)(sourceDirectory, 'package.json');
        const configPath = (0, node_path_1.resolve)(sourceDirectory, 'webpack.config.js');
        const routesFile = (0, node_path_1.resolve)(sourceDirectory, 'src', 'routes.json');
        const port = basePort + i + 1;
        (0, logger_1.logInfo)(`Looking in directory "${sourceDirectory}" ...`);
        if (!(0, node_fs_1.existsSync)(projectFile)) {
            (0, logger_1.logFail)(`No "package.json" found in directory "${sourceDirectory}". Skipping ...`);
            continue;
        }
        const project = require(projectFile);
        const startup = project['openmrs:develop'];
        if ((0, node_fs_1.existsSync)(routesFile)) {
            watchedRoutesPaths[project.name] = routesFile;
        }
        if (typeof startup === 'object') {
            // detected specialized startup command
            const cp = (0, child_process_1.exec)(startup.command, {
                cwd: sourceDirectory,
            });
            cp.stdout?.pipe(process.stdout);
            cp.stderr?.pipe(process.stderr);
            // connect to either startup.url or a computed value based on startup.host
            importMap[project.name] = startup.url || `${startup.host}/${(0, node_path_1.basename)(project.browser)}`;
        }
        else if (!(0, node_fs_1.existsSync)(configPath)) {
            // try to locate and run via default webpack
            (0, logger_1.logWarn)(`No "webpack.config.js" found in directory "${sourceDirectory}". Trying to use default config ...`);
            runProjectWebpack(defaultConfigPath, port, project, sourceDirectory, importMap, routes);
        }
        else {
            // run via specialized webpack.config.js
            runProjectWebpack(configPath, port, project, sourceDirectory, importMap, routes);
        }
    }
    (0, logger_1.logInfo)(`Assembled dynamic import map and routes for packages (${Object.keys(importMap).join(', ')}).`);
    return { importMap, routes, watchedRoutesPaths };
}
exports.runProject = runProject;
/**
 * @param decl The initial import map declaration
 * @param additionalImports New imports to add
 * @returns The import map declaration with the new imports added in. If
 *   there are new imports to add, and if the original import map declaration
 *   had type "url", it is downloaded and resolved to one of type "inline".
 */
async function mergeImportmapAndRoutes(importAndRoutes, additionalImportsAndRoutes, backend, spaPath) {
    const { importMap: importDecl, routes: routesDecl } = importAndRoutes;
    const { importMap: additionalImports, routes: additionalRoutes, watchedRoutesPaths = {}, } = additionalImportsAndRoutes || {};
    if (additionalImports && Object.keys(additionalImports).length > 0) {
        if (importDecl.type === 'url') {
            importDecl.type = 'inline';
            importDecl.value = await readImportmap(importDecl.value, backend, spaPath);
        }
        const map = JSON.parse(importDecl.value);
        importDecl.value = JSON.stringify({
            imports: {
                ...map.imports,
                ...additionalImports,
            },
        });
    }
    if (additionalRoutes && Object.keys(additionalRoutes).length > 0) {
        if (routesDecl.type === 'url') {
            routesDecl.type = 'inline';
            routesDecl.value = await readRoutes(routesDecl.value, backend, spaPath);
        }
        const routes = JSON.parse(routesDecl.value);
        routesDecl.value = JSON.stringify({
            ...routes,
            ...additionalRoutes,
        });
    }
    return { importMap: importDecl, routes: routesDecl, watchedRoutesPaths };
}
exports.mergeImportmapAndRoutes = mergeImportmapAndRoutes;
async function getImportmapAndRoutes(importMapPath, routesPath, basePort) {
    return Promise.all([getImportMap(importMapPath, basePort), getRoutes(routesPath)]).then(([importMap, routes]) => {
        return { importMap, routes };
    });
}
exports.getImportmapAndRoutes = getImportmapAndRoutes;
async function getImportMap(importMapPath, basePort) {
    if (importMapPath === '@' && basePort) {
        (0, logger_1.logWarn)('Using the "@" import map is deprecated. Switch to use the "--run-project" flag.');
        const imports = await runProject(basePort, ['.']);
        return {
            type: 'inline',
            value: JSON.stringify({
                imports,
            }),
        };
    }
    else if (!/https?:\/\//.test(importMapPath)) {
        const path = (0, node_path_1.resolve)(process.cwd(), importMapPath);
        if ((0, node_fs_1.existsSync)(path)) {
            const content = (0, node_fs_1.readFileSync)(path, 'utf8');
            const valid = checkImportmapJson(content);
            if (!valid) {
                (0, logger_1.logWarn)(`The import map provided in "${importMapPath}" does not seem right. Skipping.`);
            }
            return {
                type: 'inline',
                value: valid ? content : '',
            };
        }
        else if (checkImportmapJson(importMapPath)) {
            return {
                type: 'inline',
                value: importMapPath,
            };
        }
    }
    return {
        type: 'url',
        value: importMapPath,
    };
}
exports.getImportMap = getImportMap;
async function getRoutes(routesPath) {
    if (!/https?:\/\//.test(routesPath)) {
        const path = (0, node_path_1.resolve)(process.cwd(), routesPath);
        if ((0, node_fs_1.existsSync)(path)) {
            const content = (0, node_fs_1.readFileSync)(path, 'utf8');
            const valid = checkRoutesJson(content);
            if (!valid) {
                (0, logger_1.logWarn)(`The routes provided provided in "${routesPath}" does not seem right. Skipping.`);
            }
            return {
                type: 'inline',
                value: valid ? content : '',
            };
        }
        else if (checkRoutesJson(routesPath)) {
            return {
                type: 'inline',
                value: routesPath,
            };
        }
    }
    return {
        type: 'url',
        value: routesPath,
    };
}
exports.getRoutes = getRoutes;
/**
 * @param decl An import map declaration of type "inline"
 * @param backend The backend which is being proxied by the dev server
 * @param host The dev server host
 * @param port The dev server port
 * @returns The same import map declaration but with all imports from
 *   `backend` changed to import from `http://${host}:${port}`.
 */
function proxyImportmapAndRoutes(importmapAndRoutes, backend, host, port) {
    const { importMap: importMapDecl, routes: routesDecl, watchedRoutesPaths } = importmapAndRoutes;
    if (importMapDecl.type != 'inline') {
        throw new Error('proxyImportmapAndRoutes called on non-inline import map. This is a programming error. Value: ' +
            importMapDecl.value);
    }
    if (routesDecl.type != 'inline') {
        throw new Error('proxyImportmapAndRoutes called on non-inline routes. This is a programming error. Value: ' + routesDecl.value);
    }
    const importmap = JSON.parse(importMapDecl.value);
    Object.keys(importmap.imports).forEach((key) => {
        const url = importmap.imports[key];
        if (url.startsWith(backend)) {
            importmap.imports[key] = url.replace(backend, '');
        }
    });
    importMapDecl.value = JSON.stringify(importmap);
    return { importmap: importMapDecl, routes: routesDecl, watchedRoutesPaths };
}
exports.proxyImportmapAndRoutes = proxyImportmapAndRoutes;
