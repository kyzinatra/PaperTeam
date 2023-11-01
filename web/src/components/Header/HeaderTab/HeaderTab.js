"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var HeaderTab_sass_1 = __importDefault(require("./HeaderTab.sass"));
var HeaderTab = function (_a) {
    var children = _a.children, active = _a.active, to = _a.to;
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (<div onClick={function () { return navigate(to); }} className={HeaderTab_sass_1.default.header__tab + (active ? " ".concat(HeaderTab_sass_1.default.header__tab_active) : "")}>
      <div className={HeaderTab_sass_1.default["header__tab-content"]}>{children}</div>
    </div>);
};
exports.default = HeaderTab;
