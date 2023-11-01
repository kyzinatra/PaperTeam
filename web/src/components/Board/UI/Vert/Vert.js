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
var store_1 = require("../../../../service/redux/store");
var construcorSlice_1 = require("../../../../service/slices/construcorSlice");
var Vert_sass_1 = __importDefault(require("./Vert.sass"));
var VertItem_1 = __importDefault(require("./VertItem/VertItem"));
var Vert = function (_a) {
    var dashPattern = _a.dashPattern, _b = _a.height, height = _b === void 0 ? -1 : _b, lineIndex = _a.lineIndex;
    var ref = (0, react_1.useRef)(null);
    var _c = (0, react_1.useState)(0), fRwidth = _c[0], setFrWidth = _c[1];
    var styleHeight = height == -1 ? 100 : height;
    var _d = (0, store_1.useSelector)(function (s) { return s.construcor; }), vert = _d.vert, horiz = _d.horiz;
    var dispatch = (0, store_1.useAppDispatch)();
    (0, react_1.useEffect)(function () {
        if (ref.current) {
            setFrWidth(ref.current.clientWidth / (dashPattern.length * 2));
        }
    }, [ref, vert, horiz]);
    (0, react_1.useEffect)(function () {
        function resize(e) {
            var _a;
            setFrWidth((((_a = ref.current) === null || _a === void 0 ? void 0 : _a.clientWidth) || 0) / (dashPattern.length * 2));
        }
        window.addEventListener("resize", resize);
        return function () { return window.removeEventListener("resize", resize); };
    }, []);
    function onClickHandler(e) {
        var _a, _b;
        if (!(e.target instanceof Element))
            return;
        var clickCoordX = e.pageX - (((_a = ref.current) === null || _a === void 0 ? void 0 : _a.offsetLeft) || 0);
        var clickCordY = e.pageY - (((_b = ref.current) === null || _b === void 0 ? void 0 : _b.offsetTop) || 0);
        var fractionX = clickCoordX / fRwidth;
        var percentToClosestX = 1 - Math.abs(+!(~~fractionX % 2) - (fractionX % 1));
        var percentToClosestY = Math.abs(clickCordY / styleHeight - 0.5) * 2;
        if (percentToClosestX > percentToClosestY) {
            var axisNameV = Object.keys(vert)[~~(fractionX / 2)];
            dispatch((0, construcorSlice_1.setAxis)({
                axisName: axisNameV,
                value: vert[axisNameV]
                    .split("")
                    .reduce(function (l, el, i) { return (i == lineIndex ? l + +!+el : l + el); }, ""),
            }));
        }
        else {
            var sectionIndex_1 = ~~((fractionX + 1) / 2);
            var LineInexCoef = clickCordY / styleHeight < 0.5 ? 1 : 0;
            var axisNameH = Object.keys(horiz)[lineIndex - LineInexCoef];
            if (!axisNameH)
                return;
            dispatch((0, construcorSlice_1.setAxis)({
                axisName: axisNameH,
                value: horiz[axisNameH]
                    .split("")
                    .reduce(function (l, el, i) { return (i == sectionIndex_1 ? l + +!+el : l + el); }, ""),
            }));
        }
    }
    return (<div ref={ref} className={Vert_sass_1.default.layer} onClick={onClickHandler}>
      {dashPattern.split("").map(function (b, i) {
            return <VertItem_1.default key={i} isDashed={!+b} height={height}/>;
        })}
    </div>);
};
exports.default = Vert;
