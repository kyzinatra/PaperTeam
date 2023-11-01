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
exports.clear = exports.shift = exports.getSolution = exports.checkSolution = exports.loadFile = exports.solutionSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var axios_1 = __importDefault(require("axios"));
var console_1 = __importDefault(require("../../utils/console/console"));
var API_1 = require("../API");
var construcorSlice_1 = require("./construcorSlice");
var initialState = {
    solution: [],
    isLoading: false,
    isError: false,
};
var logLoadInit = [
    ["blue", "INIT"],
    ["", " default case"],
];
var loadlog = [
    ["green", "Success"],
    ["", " load file!"],
];
var loadFile = (0, toolkit_1.createAsyncThunk)("solution/load", function (_a, thunkAPI) {
    var path = _a.path, init = _a.init;
    return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(API_1.API_URL + "/getJSON/?path=" + path)];
                case 1: return [4 /*yield*/, (_b.sent()).data];
                case 2:
                    result = _b.sent();
                    console_1.default.log(thunkAPI.dispatch, init ? logLoadInit : loadlog, "😋");
                    thunkAPI.dispatch((0, construcorSlice_1.set)(result));
                    return [2 /*return*/];
            }
        });
    });
});
exports.loadFile = loadFile;
var checkSolution = (0, toolkit_1.createAsyncThunk)("solution/checkSolution", function (check, thunkAPI) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.default.get(API_1.API_URL + "/getSolution/?json=" + check[1])];
            case 1: return [4 /*yield*/, (_a.sent()).data];
            case 2:
                result = _a.sent();
                if (result.includes(check[0]))
                    console_1.default.log(thunkAPI.dispatch, [
                        ["", "Your answer "],
                        ["blue", check[0]],
                        ["", " is absolutely "],
                        ["green", "correct!"],
                    ], "🎉");
                else
                    console_1.default.log(thunkAPI.dispatch, [
                        ["", "Your answer "],
                        ["blue", check[0]],
                        ["", " isn't correct, try again"],
                    ], "😥");
                return [2 /*return*/];
        }
    });
}); });
exports.checkSolution = checkSolution;
var getSolution = (0, toolkit_1.createAsyncThunk)("solution/getSolution", function (check, thunkAPI) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.default.get(API_1.API_URL + "/getSolution/?json=" + check)];
            case 1: return [4 /*yield*/, (_a.sent()).data];
            case 2:
                result = _a.sent();
                if (result[0] == "") {
                    console_1.default.log(thunkAPI.dispatch, [
                        ["", "There is no "],
                        ["blue", "optimal"],
                        ["", " solution"],
                    ], "😣");
                    return [2 /*return*/, { solution: [] }];
                }
                return [2 /*return*/, { solution: result }];
        }
    });
}); });
exports.getSolution = getSolution;
exports.solutionSlice = (0, toolkit_1.createSlice)({
    name: "solution",
    initialState: initialState,
    reducers: {
        shift: function (state) {
            state.solution.shift();
        },
        clear: function (stat) { return initialState; },
    },
    extraReducers: function (builder) {
        builder
            .addCase(loadFile.fulfilled, function (state, action) {
            return __assign(__assign({}, state), { isLoading: false, isError: false });
        })
            .addCase(loadFile.pending, function (state) {
            return __assign(__assign({}, state), { isLoading: true, isError: false });
        })
            .addCase(loadFile.rejected, function (state) {
            return __assign(__assign({}, state), { isLoading: false, isError: true });
        })
            .addCase(checkSolution.fulfilled, function (state) {
            return __assign(__assign({}, state), { isLoading: false, isError: false });
        })
            .addCase(checkSolution.pending, function (state) {
            return __assign(__assign({}, state), { isLoading: true, isError: false });
        })
            .addCase(checkSolution.rejected, function (state) {
            return __assign(__assign({}, state), { isLoading: false, isError: true });
        })
            .addCase(getSolution.fulfilled, function (state, action) {
            return __assign(__assign(__assign({}, state), action.payload), { isLoading: false, isError: false });
        })
            .addCase(getSolution.pending, function (state) {
            return __assign(__assign({}, state), { isLoading: true, isError: false });
        })
            .addCase(getSolution.rejected, function (state) {
            return __assign(__assign({}, state), { isLoading: false, isError: true });
        });
    },
});
var _a = exports.solutionSlice.actions, shift = _a.shift, clear = _a.clear;
exports.shift = shift;
exports.clear = clear;
exports.default = exports.solutionSlice.reducer;
