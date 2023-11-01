"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Horiz_sass_1 = __importDefault(require("./Horiz.sass"));
var HorizItem_1 = __importDefault(require("./HorizItem/HorizItem"));
var Horiz = function (_a) {
    var dashPattern = _a.dashPattern, title = _a.title;
    return (<div className={Horiz_sass_1.default.horiz__relative}>
      <h3 className={Horiz_sass_1.default["horiz__title"]}>{title}</h3>
      <div className={Horiz_sass_1.default["horiz__layer"]} style={{ gridTemplateColumns: "0.5fr repeat(".concat(dashPattern.length - 2, ", 1fr) 0.5fr") }}>
        {dashPattern.split("").map(function (a, i) {
            return <HorizItem_1.default key={i} index={i} axis={title} isDashed={!+a}/>;
        })}
      </div>
    </div>);
};
exports.default = Horiz;
