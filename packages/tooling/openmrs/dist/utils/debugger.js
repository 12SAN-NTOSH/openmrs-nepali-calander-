"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = require("node:path");
const logger_1 = require("./logger");
function getWebpackEnv() {
    return {
        ...process.env,
        analyze: process.env.BUNDLE_ANALYZE === 'true',
        production: process.env.NODE_ENV === 'production',
        development: process.env.NODE_ENV === 'development',
    };
}
function loadConfig(configPath) {
    const content = require(configPath);
    if (typeof content === 'function') {
        return content(getWebpackEnv());
    }
    return content;
}
function debug(configPath, port) {
    const Webpack = require('webpack');
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    const WebpackDevServer = require('webpack-dev-server');
    const config = loadConfig(configPath);
    const compiler = Webpack(config);
    const devServerOptions = {
        ...config.devServer,
        port,
        static: (0, node_path_1.dirname)(configPath),
    };
    const server = new WebpackDevServer(devServerOptions, compiler);
    server.startCallback(() => {
        (0, logger_1.logInfo)(`Listening at http://localhost:${port}`);
    });
}
process.on('message', ({ source, port }) => debug(source, port));
