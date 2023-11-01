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
var Console_sass_1 = __importDefault(require("./Console.sass"));
var ConsoleLine_1 = __importDefault(require("./ConsoleLine/ConsoleLine"));
var store_1 = require("../../service/redux/store");
var console_1 = __importDefault(require("../../utils/console/console"));
var global_sass_1 = __importDefault(require("../../sass/global.sass"));
var solutionSlice_1 = require("../../service/slices/solutionSlice");
var Console = function () {
    var log = (0, store_1.useSelector)(function (store) { return store.console; });
    var dispatch = (0, store_1.useAppDispatch)();
    var _a = (0, react_1.useState)(false), isFocus = _a[0], setFocus = _a[1];
    var _b = (0, react_1.useState)(""), input = _b[0], setInput = _b[1];
    var _c = (0, react_1.useState)(0), historyBack = _c[0], setHistory = _c[1];
    var history = (0, store_1.useSelector)(function (s) { return s.history; });
    var _d = (0, store_1.useSelector)(function (s) { return s.construcor; }), padding = _d.padding, horiz = _d.horiz, vert = _d.vert;
    var json = JSON.stringify({ horiz: horiz, vert: vert, padding: padding });
    var solution = (0, store_1.useSelector)(function (s) { return s.solution.solution; });
    (0, react_1.useEffect)(function () {
        if (historyBack > 0 && historyBack <= history.length) {
            setInput(history[historyBack - 1]);
        }
        else
            setInput("");
    }, [historyBack]);
    function focusHandler(e) {
        setFocus(true);
    }
    function blurHander(e) {
        setFocus(false);
    }
    function subbmitCommand(e) {
        if (isFocus && e.key == "Enter") {
            if (input == "")
                return;
            console_1.default.run(dispatch, input, json);
            setInput("");
            setHistory(0);
            return;
        }
        if (isFocus && e.key == "ArrowUp") {
            setHistory(function (a) { return (++a > history.length ? history.length : a); });
        }
        if (isFocus && e.key == "ArrowDown") {
            setHistory(function (a) { return (--a < 0 ? 0 : a); });
        }
    }
    function nextClick(e) {
        e.stopPropagation();
        dispatch((0, solutionSlice_1.shift)());
    }
    return (<div className={Console_sass_1.default.console} onClick={focusHandler} onBlur={blurHander} onKeyDown={subbmitCommand}>
      {log.map(function (a) {
            return (<ConsoleLine_1.default prefix={a.prefix} key={a.id}>
            {a.data.map(function (b, i) {
                    return (<span key={i} className={global_sass_1.default[b[0]]}>
                  {b[1]}
                </span>);
                })}
          </ConsoleLine_1.default>);
        })}
      {!!solution.length && (<ConsoleLine_1.default prefix={"📒"} className={Console_sass_1.default["console__input-wrapper"]}>
          <span>
            <span>{solution[0]}</span>
            <button className={Console_sass_1.default.console__next} onClick={nextClick}>
              ⏩
            </button>
          </span>
        </ConsoleLine_1.default>)}
      {isFocus && (<ConsoleLine_1.default prefix={"👉"} className={Console_sass_1.default["console__input-wrapper"]}>
          <input type="text" onChange={function (e) { return setInput(e.target.value); }} value={input} className={Console_sass_1.default.console__input} autoFocus/>
        </ConsoleLine_1.default>)}
    </div>);
};
exports.default = Console;
