"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runDebug = void 0;
const utils_1 = require("../utils");
function runDebug(args) {
    const webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');
    const config = (0, utils_1.loadWebpackConfig)({
        importmap: args.importmap,
        backend: args.backend,
        apiUrl: args.apiUrl,
        supportOffline: args.supportOffline,
        spaPath: args.spaPath,
        configUrls: args.configUrls,
        addCookie: args.addCookie,
        env: 'development',
    });
    (0, utils_1.logInfo)(`Starting the dev server ...`);
    const { host, port } = args;
    const options = {
        ...(config['devServer'] ?? {}),
        port,
        host,
        publicPath: args.spaPath,
        stats: { colors: true },
    };
    const server = new WebpackDevServer(webpack(config), options);
    server.listen(port, host, (err) => {
        if (err) {
            (0, utils_1.logWarn)(`Error: ${err}`);
        }
        else {
            (0, utils_1.logInfo)(`Listening at http://${host}:${port}`);
        }
    });
    return new Promise(() => { });
}
exports.runDebug = runDebug;
