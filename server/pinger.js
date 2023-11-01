"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var http_1 = __importDefault(require("http"));
var options = {
    hostname: "paperteam.herokuapp.com",
    path: "/",
    method: "get",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
};
function ping() {
    var req = http_1.default.request(options, function (res) {
        res.setEncoding("utf8");
        res.on("data", function (chunk) { });
        res.on("end", function () {
            console.log("stauts: ".concat(res.statusCode, " \n\t\t\t\t\nComplete: ").concat(res.complete, "\n\t\t\t\t\nDate: ").concat(new Date().toLocaleTimeString(), " ").concat(new Date().toLocaleDateString(), " \n\n\n"));
        });
    });
    req.on("error", function (e) {
        console.log("ERROR: ".concat(e.message, " \n\n\n\t\t\tDate: ").concat(new Date().toLocaleTimeString(), "  ").concat(new Date().toLocaleDateString(), "\n\t\t\t\nStart ping() again..."));
        ping();
    });
    req.end();
}
function start() {
    setInterval(ping, 900000);
}
exports.start = start;
