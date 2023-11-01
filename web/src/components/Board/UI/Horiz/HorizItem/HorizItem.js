"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var store_1 = require("../../../../../service/redux/store");
var construcorSlice_1 = require("../../../../../service/slices/construcorSlice");
var HorizItem_sass_1 = __importDefault(require("./HorizItem.sass"));
var HorizItem = function (_a) {
    var isDashed = _a.isDashed, axis = _a.axis, index = _a.index;
    var dashClass = " " + (isDashed ? HorizItem_sass_1.default["horiz_dash"] : "");
    var dispatch = (0, store_1.useAppDispatch)();
    var horiz = (0, store_1.useSelector)(function (a) { return a.construcor.horiz; });
    return (<div className={HorizItem_sass_1.default["horiz__wrapper"]} onClick={function (e) {
            e.stopPropagation();
            dispatch((0, construcorSlice_1.setAxis)({
                axisName: axis,
                value: horiz[axis]
                    .split("")
                    .reduce(function (l, el, i) { return (i == index ? l + +!+el : l + el); }, ""),
            }));
        }}>
      <span className={HorizItem_sass_1.default.horiz + dashClass}/>
    </div>);
};
exports.default = HorizItem;
