"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Header_1 = __importDefault(require("../Header/Header"));
var Main_1 = __importDefault(require("../Main/Main"));
var Constructor_1 = __importDefault(require("../Constructor/Constructor"));
var store_1 = require("../../service/redux/store");
var Load_1 = __importDefault(require("../Load/Load"));
var Contact_1 = __importDefault(require("../Contact/Contact"));
var App = function () {
    var isLoading = (0, store_1.useSelector)(function (a) { return a.solution.isLoading || a.construcor.isLoading; });
    return (<react_router_dom_1.BrowserRouter>
      <Header_1.default />

      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<Main_1.default />}/>
        <react_router_dom_1.Route path="/constructor" element={<Constructor_1.default />}/>
        <react_router_dom_1.Route path="/contact" element={<Contact_1.default />}/>
      </react_router_dom_1.Routes>
      <Load_1.default isLoading={isLoading}/>
    </react_router_dom_1.BrowserRouter>);
};
exports.default = App;
