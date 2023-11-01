"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consoleSlice_1 = require("../../service/slices/consoleSlice");
var solutionSlice_1 = require("../../service/slices/solutionSlice");
var historySlice_1 = require("../../service/slices/historySlice");
var uid_1 = require("uid");
var commands_1 = require("./commands");
var ConsoleController = /** @class */ (function () {
    function ConsoleController() {
    }
    ConsoleController.runConsole = function (dispatch) {
        dispatch((0, consoleSlice_1.add)({
            id: (0, uid_1.uid)(),
            data: [
                ["green", "kyzintra@Ubuntu20.04.4 "],
                ["purple", "kyzintra@Ubuntu20.04.4 "],
                ["", "~"],
            ],
            CreateTime: Date.now(),
        }));
    };
    ConsoleController.log = function (dispatch, text, prefix) {
        dispatch((0, consoleSlice_1.add)({
            id: (0, uid_1.uid)(),
            data: text,
            prefix: prefix,
            CreateTime: Date.now(),
        }));
    };
    ConsoleController.run = function (dispatch, command, info) {
        dispatch((0, historySlice_1.add)(command));
        if (/^set/i.test(command))
            return dispatch((0, consoleSlice_1.add)((0, commands_1.construcorChange)(command, dispatch)));
        if (/^difficulty/i.test(command))
            return dispatch((0, consoleSlice_1.add)((0, commands_1.difficultyChange)(command, dispatch)));
        if (/^json get$/i.test(command))
            return dispatch((0, consoleSlice_1.add)((0, commands_1.JSONLog)(command, dispatch, info)));
        if (/^clear$/i.test(command)) {
            dispatch((0, consoleSlice_1.clear)());
            dispatch((0, solutionSlice_1.clear)());
            return;
        }
        dispatch((0, consoleSlice_1.add)({
            id: (0, uid_1.uid)(),
            data: [["", "bash: ".concat(command.split(" ")[0], ": command not found")]],
            CreateTime: Date.now(),
            prefix: "🙈",
        }));
    };
    ConsoleController.clear = function (dispatch) {
        dispatch((0, consoleSlice_1.clear)());
        dispatch((0, solutionSlice_1.clear)());
    };
    return ConsoleController;
}());
exports.default = ConsoleController;
