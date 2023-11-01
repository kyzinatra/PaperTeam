"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDifficulty = exports.setTask = exports.clearOverflow = exports.setSize = exports.setAxis = exports.clear = exports.set = exports.constructorSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var axios_1 = __importDefault(require("axios"));
var API_1 = require("../API");
var initialState = {
    horiz: {},
    vert: {},
    isOverflow: false,
    isError: false,
    isLoading: false,
};
var setTask = (0, toolkit_1.createAsyncThunk)("constructor/setTask", function (difficulty, thunkAPI) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.default.get(API_1.API_URL + "/getTask/?difficulty=" + difficulty)];
            case 1: return [4 /*yield*/, (_a.sent()).data];
            case 2:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); });
exports.setTask = setTask;
exports.constructorSlice = (0, toolkit_1.createSlice)({
    name: "constructor",
    initialState: initialState,
    reducers: {
        set: function (state, action) {
            return __assign(__assign({}, state), action.payload);
        },
        setDifficulty: function (state, action) {
            return __assign(__assign({}, state), { difficulty: action.payload });
        },
        setAxis: function (state, action) {
            var _a = action.payload, axisName = _a.axisName, value = _a.value;
            if (state["vert"][axisName])
                state["vert"][axisName] = value;
            else
                state["horiz"][axisName] = value;
            return state;
        },
        clearOverflow: function (s) { return (__assign(__assign({}, s), { isOverflow: false })); },
        setSize: function (state, action) {
            var _a, _b;
            var _c = action.payload, type = _c.type, size = _c.size;
            var vert = state.vert, horiz = state.horiz;
            var width = Object.keys(vert).length;
            var height = Object.keys(horiz).length;
            switch (type) {
                case "width":
                    width = size;
                    break;
                case "height":
                    height = size;
                    break;
            }
            if (width + height > 26 || size == 0) {
                state.isOverflow = true;
                return;
            }
            state.vert = {};
            state.horiz = {};
            var LETTER_A_CODE = 65;
            for (var i = LETTER_A_CODE; i < LETTER_A_CODE + height; i++) {
                state.horiz = __assign(__assign({}, state.horiz), (_a = {}, _a[String.fromCharCode(i)] = "1".repeat(width + 1), _a));
            }
            for (var i = LETTER_A_CODE + height; i < LETTER_A_CODE + width + height; i++) {
                state.vert = __assign(__assign({}, state.vert), (_b = {}, _b[String.fromCharCode(i)] = "1".repeat(height + 1), _b));
            }
        },
        clear: function (state) { return initialState; },
    },
    extraReducers: function (builder) {
        builder
            .addCase(setTask.fulfilled, function (state, _a) {
            var payload = _a.payload;
            return (__assign(__assign(__assign({}, state), payload), { isError: false, isLoading: false }));
        })
            .addCase(setTask.rejected, function (state, _a) {
            var payload = _a.payload;
            return (__assign(__assign({}, state), { isError: true, isLoading: false }));
        })
            .addCase(setTask.pending, function (state, _a) {
            var payload = _a.payload;
            return (__assign(__assign({}, state), { isError: false, isLoading: true }));
        });
    },
});
var _a = exports.constructorSlice.actions, set = _a.set, clear = _a.clear, setAxis = _a.setAxis, setSize = _a.setSize, clearOverflow = _a.clearOverflow, setDifficulty = _a.setDifficulty;
exports.set = set;
exports.clear = clear;
exports.setAxis = setAxis;
exports.setSize = setSize;
exports.clearOverflow = clearOverflow;
exports.setDifficulty = setDifficulty;
exports.default = exports.constructorSlice.reducer;
