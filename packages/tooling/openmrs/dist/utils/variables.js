"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEnvVariables = void 0;
function setEnvVariables(envVariables) {
    Object.keys(envVariables).forEach((key) => {
        process.env[key] = envVariables[key];
    });
}
exports.setEnvVariables = setEnvVariables;
