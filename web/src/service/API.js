"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_FILE = exports.API_URL = void 0;
var API_URL = "/api/v1.0.1";
exports.API_URL = API_URL;
if (process.env.NODE_ENV == "development") {
    exports.API_URL = API_URL = "http://localhost:3000/api/v1.0.1";
}
exports.DEFAULT_FILE = "algorithm/json_files/test_init.json";
