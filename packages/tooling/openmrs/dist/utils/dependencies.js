"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppRoutes = exports.getMainBundle = exports.getSharedDependencies = void 0;
const node_path_1 = require("node:path");
const node_fs_1 = require("node:fs");
const semver_1 = require("semver");
function getSharedDependencies() {
    return require('@openmrs/esm-app-shell/dependencies.json');
}
exports.getSharedDependencies = getSharedDependencies;
function getMainBundle(project) {
    const file = project.browser || project.module || project.main;
    if (!Boolean(file)) {
        throw Error('Could not find project to run. If you ran this outside of a directory containing an app, make sure you specify --sources.');
    }
    return {
        path: file,
        name: (0, node_path_1.basename)(file),
        dir: (0, node_path_1.dirname)(file),
    };
}
exports.getMainBundle = getMainBundle;
function getAppRoutes(sourceDirectory, project) {
    const routesPath = (0, node_path_1.resolve)(sourceDirectory, 'src', 'routes.json');
    if (!(0, node_fs_1.existsSync)(routesPath)) {
        return {};
    }
    const stats = (0, node_fs_1.statSync)(routesPath);
    if (!stats.isFile()) {
        return {};
    }
    const json = JSON.parse((0, node_fs_1.readFileSync)(routesPath, { encoding: 'utf-8' }));
    if (!(typeof json === 'object')) {
        return {};
    }
    json['version'] = project.version ? (0, semver_1.inc)(project.version, 'prerelease', 'local') : undefined;
    return json;
}
exports.getAppRoutes = getAppRoutes;
