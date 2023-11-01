"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.difficultyChange = exports.JSONLog = exports.construcorChange = void 0;
var uid_1 = require("uid");
var construcorSlice_1 = require("../../service/slices/construcorSlice");
function construcorChange(command, dispatch) {
    if (/^set\s+([A-Z])\s*:\s*([10]+)$/i.test(command)) {
        var match = command.match(/^set ([A-Z])\s*:\s*([10]+)$/i);
        dispatch((0, construcorSlice_1.setAxis)({
            axisName: match[1],
            value: match[2],
        }));
        return {
            id: (0, uid_1.uid)(),
            data: [
                ["", "Axis ".concat(match[1], " is ")],
                ["green", "successfuly "],
                ["", "changed (".concat(match[2], ")")],
            ],
            prefix: "🧙",
            CreateTime: Date.now(),
        };
    }
    if (/^set\s+(width|height)\s*(\d+)\s*$/i.test(command)) {
        var match = command.match(/^set\s+(width|height)\s*(\d+)\s*$/i);
        dispatch((0, construcorSlice_1.setSize)({ type: match[1], size: +match[2] }));
        return {
            id: (0, uid_1.uid)(),
            data: [["blue", "Constructor request is sent"]],
            CreateTime: Date.now(),
            prefix: "📨",
        };
    }
    return {
        id: (0, uid_1.uid)(),
        data: [
            ["red", "Constructor Set Error: "],
            ["", "wrong input"],
        ],
        prefix: "🤔",
        CreateTime: Date.now(),
    };
}
exports.construcorChange = construcorChange;
function JSONLog(command, dispatch, info) {
    return {
        id: (0, uid_1.uid)(),
        data: [
            ["green", "JSON: "],
            ["", info],
        ],
        prefix: "🙌",
        CreateTime: Date.now(),
    };
}
exports.JSONLog = JSONLog;
function difficultyChange(command, dispatch) {
    if (/^difficulty\s*[123]\s*$/.test(command)) {
        var difficulty = command.match(/^difficulty\s*([123])\s*$/)[1];
        dispatch((0, construcorSlice_1.setDifficulty)(+difficulty));
        return {
            id: (0, uid_1.uid)(),
            data: [
                ["", "Your difficuilty level have set"],
                ["green", " successfully "],
            ],
            prefix: "🎊",
            CreateTime: Date.now(),
        };
    }
    return {
        id: (0, uid_1.uid)(),
        data: [
            ["red", "Constructor difficulty Error: "],
            ["", "wrong input"],
        ],
        prefix: "🤔",
        CreateTime: Date.now(),
    };
}
exports.difficultyChange = difficultyChange;
