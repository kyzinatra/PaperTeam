"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var VertItem_sass_1 = __importDefault(require("./VertItem.sass"));
var VertItem = function (_a) {
    var isDashed = _a.isDashed, height = _a.height;
    var dashClass = " " + (isDashed ? VertItem_sass_1.default["vert_dash"] : "");
    var styleHeight = height == -1 ? "100px" : height + "px";
    return (<div className={VertItem_sass_1.default["vert-wrapper"]} style={{
            height: styleHeight,
        }}>
      <span className={VertItem_sass_1.default.vert + dashClass}/>
    </div>);
};
exports.default = VertItem;
