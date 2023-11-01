"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Header_sass_1 = __importDefault(require("./Header.sass"));
var HeaderTab_1 = __importDefault(require("./HeaderTab/HeaderTab"));
var react_router_dom_1 = require("react-router-dom");
var Header = function () {
    var isMain = (0, react_router_dom_1.useMatch)("/");
    var isConstructor = (0, react_router_dom_1.useMatch)("/constructor");
    var isContact = (0, react_router_dom_1.useMatch)("/contact");
    return (<header className={Header_sass_1.default.header}>
      <HeaderTab_1.default active={!!isMain} to="/">
        Главная
      </HeaderTab_1.default>
      <HeaderTab_1.default active={!!isConstructor} to="/constructor">
        Конструктор
      </HeaderTab_1.default>
      <HeaderTab_1.default active={!!isContact} to="/contact">
        Помощь
      </HeaderTab_1.default>
    </header>);
};
exports.default = Header;
