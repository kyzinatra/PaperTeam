"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelector = exports.useAppDispatch = exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var react_redux_1 = require("react-redux");
var consoleSlice_1 = __importDefault(require("../slices/consoleSlice"));
var construcorSlice_1 = __importDefault(require("../slices/construcorSlice"));
var historySlice_1 = __importDefault(require("../slices/historySlice"));
var solutionSlice_1 = __importDefault(require("../slices/solutionSlice"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        console: consoleSlice_1.default,
        construcor: construcorSlice_1.default,
        history: historySlice_1.default,
        solution: solutionSlice_1.default,
    },
    devTools: process.env.NODE_ENV === "development",
});
var useAppDispatch = function () { return (0, react_redux_1.useDispatch)(); };
exports.useAppDispatch = useAppDispatch;
exports.useSelector = react_redux_1.useSelector;
