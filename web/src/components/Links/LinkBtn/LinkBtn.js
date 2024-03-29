"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var LinkBtn_sass_1 = __importDefault(require("./LinkBtn.sass"));
var LinkBtn = function (_a) {
    var children = _a.children, to = _a.to;
    return (<react_router_dom_1.Link to={to} className={LinkBtn_sass_1.default.linkBtn}>
      {children}
    </react_router_dom_1.Link>);
};
exports.default = LinkBtn;
