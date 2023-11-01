"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var uid_1 = require("uid");
var store_1 = require("../../service/redux/store");
var consoleSlice_1 = require("../../service/slices/consoleSlice");
var construcorSlice_1 = require("../../service/slices/construcorSlice");
var Board_sass_1 = __importDefault(require("./Board.sass"));
var Horiz_1 = __importDefault(require("./UI/Horiz/Horiz"));
var Vert_1 = __importDefault(require("./UI/Vert/Vert"));
var Board = function () {
    var _a = (0, store_1.useSelector)(function (store) { return store.construcor; }), vert = _a.vert, horiz = _a.horiz;
    var isOverflow = (0, store_1.useSelector)(function (a) { return a.construcor.isOverflow; });
    var dispatch = (0, store_1.useAppDispatch)();
    (0, react_1.useEffect)(function () {
        if (isOverflow) {
            dispatch((0, consoleSlice_1.add)({
                data: [
                    ["red", "Error: "],
                    ["", "max size has been exceeded or query doesn't make sense "],
                ],
                id: (0, uid_1.uid)(),
            }));
            dispatch((0, construcorSlice_1.clearOverflow)());
        }
    }, [isOverflow]);
    var bottomPadVertLine = Object.values(vert).reduce(function (l, item) { return l + item[item.length - 1]; }, "") || "";
    return (<div className={Board_sass_1.default.board}>
      <div className={Board_sass_1.default.board__layer}>
        {Object.entries(vert).map(function (a, i) {
            return (<h3 key={i} className={Board_sass_1.default.board__center}>
              {a[0]}
            </h3>);
        })}
      </div>
      {Object.entries(horiz).map(function (a, i) {
            var vertLine = Object.values(vert).reduce(function (last, vertLine) { return last + vertLine[i]; }, "");
            var horizLine = Object.values(horiz)[i];
            var horizTitle = Object.keys(horiz)[i];
            return (<react_1.default.Fragment key={i}>
            <Vert_1.default dashPattern={vertLine} lineIndex={i}/>
            <Horiz_1.default title={horizTitle} dashPattern={horizLine}/>
          </react_1.default.Fragment>);
        })}
      <div className={Board_sass_1.default.board__layer}>
        <Vert_1.default dashPattern={bottomPadVertLine} lineIndex={Object.keys(horiz).length}/>
      </div>
    </div>);
};
exports.default = Board;
