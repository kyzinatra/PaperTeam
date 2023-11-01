"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ConsoleLine_sass_1 = __importDefault(require("./ConsoleLine.sass"));
var ConsoleLine = function (_a) {
    var prefix = _a.prefix, children = _a.children, className = _a.className;
    var toAdd = null;
    if (typeof prefix == "boolean" && prefix)
        toAdd = <span className={ConsoleLine_sass_1.default.line__prefix}>{">"}</span>;
    else
        toAdd = prefix ? <span className={ConsoleLine_sass_1.default.line__prefix}>{prefix}</span> : "";
    return (<div className={ConsoleLine_sass_1.default.line} onClick={function (e) { return e.stopPropagation(); }}>
      <span className={className}>
        <span>{toAdd}</span>
        {children}
      </span>
    </div>);
};
exports.default = ConsoleLine;
