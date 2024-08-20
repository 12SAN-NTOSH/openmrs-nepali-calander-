"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logFail = exports.logWarn = exports.logInfo = void 0;
/* eslint-disable no-console */
const chalk_1 = __importDefault(require("chalk"));
function logInfo(message) {
    console.log(`${chalk_1.default.green.bold('[openmrs]')} ${message}`);
}
exports.logInfo = logInfo;
function logWarn(message) {
    console.warn(`${chalk_1.default.yellow.bold('[openmrs]')} ${chalk_1.default.yellow(message)}`);
}
exports.logWarn = logWarn;
function logFail(message) {
    console.error(`${chalk_1.default.red.bold('[openmrs]')} ${chalk_1.default.red(message)}`);
}
exports.logFail = logFail;
