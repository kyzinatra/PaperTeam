"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = exports.add = exports.consoleSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = [
    {
        id: "000000",
        data: [
            ["green", "kyzintra@Ubuntu20.04.4 "],
            ["purple", "MINGW64 "],
            ["", "~"],
            ["blue", " (master)"],
        ],
        CreateTime: Date.now(),
    },
];
exports.consoleSlice = (0, toolkit_1.createSlice)({
    name: "console",
    initialState: initialState,
    reducers: {
        add: function (state, action) {
            return __spreadArray(__spreadArray([], state, true), [action.payload], false);
        },
        clear: function (state) {
            return initialState;
        },
    },
});
exports.add = (_a = exports.consoleSlice.actions, _a.add), exports.clear = _a.clear;
exports.default = exports.consoleSlice.reducer;
