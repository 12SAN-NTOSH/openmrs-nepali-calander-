"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startWebpack = void 0;
const path_1 = require("path");
const child_process_1 = require("child_process");
function startWebpack(source, port, cwd = process.cwd()) {
    const runner = (0, path_1.resolve)(__dirname, 'debugger.js');
    const ps = (0, child_process_1.fork)(runner, [], { cwd });
    ps.send({ source, port });
    return ps;
}
exports.startWebpack = startWebpack;
