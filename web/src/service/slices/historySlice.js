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
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.historySlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = [];
exports.historySlice = (0, toolkit_1.createSlice)({
    name: "history",
    initialState: initialState,
    reducers: {
        add: function (state, action) {
            return __spreadArray([action.payload], state, true);
        },
    },
});
exports.add = exports.historySlice.actions.add;
exports.default = exports.historySlice.reducer;
