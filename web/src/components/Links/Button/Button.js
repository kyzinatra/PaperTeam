"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_sass_1 = __importDefault(require("./Button.sass"));
var Button = function (_a) {
    var children = _a.children, onClick = _a.onClick, className = _a.className;
    return (<button onClick={onClick} className={Button_sass_1.default.button + " " + className}>
      {children}
    </button>);
};
exports.default = Button;
