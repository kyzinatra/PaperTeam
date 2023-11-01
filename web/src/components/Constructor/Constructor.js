"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var consoleSlice_1 = require("../../service/slices/consoleSlice");
var solutionSlice_1 = require("../../service/slices/solutionSlice");
var store_1 = require("../../service/redux/store");
var console_1 = __importDefault(require("../../utils/console/console"));
var Board_1 = __importDefault(require("../Board/Board"));
var Console_1 = __importDefault(require("../Console/Console"));
var Button_1 = __importDefault(require("../Links/Button/Button"));
var Constructor_sass_1 = __importDefault(require("./Constructor.sass"));
var API_1 = require("../../service/API");
var solutionSlice_2 = require("../../service/slices/solutionSlice");
var construcorSlice_1 = require("../../service/slices/construcorSlice");
var Constructor = function () {
    var dispatch = (0, store_1.useAppDispatch)();
    var isError = (0, store_1.useSelector)(function (b) { return b.solution.isError || b.construcor.isError; });
    var state = (0, store_1.useSelector)(function (b) { return b.construcor; });
    var _a = (0, react_1.useState)(""), answer = _a[0], setAnswer = _a[1];
    (0, react_1.useEffect)(function () {
        dispatch((0, solutionSlice_2.loadFile)({ path: API_1.DEFAULT_FILE, init: true }));
    }, []);
    (0, react_1.useEffect)(function () {
        if (isError == true) {
            console_1.default.log(dispatch, [
                ["red", "Error: "],
                ["", "Something went wrong, please reload page and try again"],
            ], "😨");
        }
    }, [isError]);
    return (<div className={Constructor_sass_1.default["constructor-page"]}>
      <Board_1.default />
      <div className={Constructor_sass_1.default.constructor__input}>
        <input type="text" value={answer} onChange={function (e) { return setAnswer(e.target.value); }}/>
      </div>
      <nav className={Constructor_sass_1.default.constructor__nav}>
        <Button_1.default onClick={function (e) { return dispatch((0, solutionSlice_2.checkSolution)([answer, JSON.stringify(state)])); }}>
          Проверить решение
        </Button_1.default>
        <Button_1.default onClick={function (e) { return dispatch((0, construcorSlice_1.setTask)(state.difficulty || 1)); }}>Получить задачу</Button_1.default>
        <Button_1.default onClick={function (e) { return dispatch((0, solutionSlice_2.getSolution)(JSON.stringify(state))); }}>
          Расчитать оптимальное решение
        </Button_1.default>
      </nav>
      <Console_1.default />
      <Button_1.default className={Constructor_sass_1.default.constructor__clear} onClick={function () {
            dispatch((0, consoleSlice_1.clear)());
            dispatch((0, solutionSlice_1.clear)());
        }}>
        Clear
      </Button_1.default>
    </div>);
};
exports.default = Constructor;
