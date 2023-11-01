"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Load_sass_1 = __importDefault(require("./Load.sass"));
var Load = function (_a) {
    var isLoading = _a.isLoading;
    return (<>
      {isLoading && (<div className={Load_sass_1.default.load}>
          <h1>Loading...</h1>
        </div>)}
    </>);
};
exports.default = Load;
