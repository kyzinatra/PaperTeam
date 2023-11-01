"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = require("react-dom/client");
var App_1 = __importDefault(require("./components/App/App"));
require("./sass/main.sass");
require("./sass/global.sass");
var store_1 = require("./service/redux/store");
var react_redux_1 = require("react-redux");
console.log(process.env.NODE_ENV);
var el = document.getElementById("root");
var root = (0, client_1.createRoot)(el);
root.render(<react_redux_1.Provider store={store_1.store}>
    <App_1.default />
  </react_redux_1.Provider>);
