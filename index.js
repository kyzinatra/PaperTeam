"use strict";
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var child_process_1 = require("child_process");
var API_URL = "/api/v1.0.1";
var app = (0, express_1.default)();
var cors = require("cors");
var PORT = process.env.PORT || 3000;
var corsOptions = {
	origin: function (origin, callback) {
		callback(null, true);
	},
};
app.use(cors(corsOptions));
function randEl(arr) {
	var el = ~~(arr.length * Math.random());
	return arr[el];
}
function getMain(req, res) {
	res.contentType("text/html");
	try {
		var html = (0, fs_1.readFileSync)(
			path_1.default.resolve(__dirname, "./web/public/index.html"),
			{
				encoding: "utf8",
			}
		);
		res.status(200);
		return res.send(html);
	} catch (e) {
		var error = (0, fs_1.readFileSync)(path_1.default.resolve(__dirname, "./web/public/500.html"), {
			encoding: "utf8",
		});
		return res.send(error);
	}
}
app.get("/about", (req, res) => res.send("About Page Route"));

app.get(
	/\.(js|css|map|png|jp[2g]|webp|tiff|jfif|jpeg(2000)?|ico|bem|gif|svg)$/,
	express_1.default.static("web/public")
);
app.get("/", getMain);
app.get("/constructor", getMain);
app.get("/contact", getMain);
app.get(API_URL + "/getSolution", function (req, res) {
	var _a, _b;
	var Qpath = (((_a = req.query) === null || _a === void 0 ? void 0 : _a.path) || "").toString();
	var Qflag = ((_b = req.query) === null || _b === void 0 ? void 0 : _b.friendly) == "true";
	res.contentType("application/json");
	new Promise(function (resolve, reject) {
		var qJson = req.query.json;
		var process = (0, child_process_1.spawn)("py", ["algorithm/main.py", "-j", qJson]);
		process.stdout.on("data", resolve);
		process.stderr.on("data", reject);
	}).then(
		function (result) {
			res.status(200);
			res.send(result.toString());
		},
		function (err) {
			res.status(400);
			res.send(JSON.stringify({ message: err.toString() }));
		}
	);
});
app.get(API_URL + "/getJSON", function (req, res) {
	var _a;
	var Qjson = (((_a = req.query) === null || _a === void 0 ? void 0 : _a.path) || "").toString();
	res.contentType("application/json");
	try {
		if (!/.json$/.test(Qjson)) throw Error("INVALID PATH");
		var file = (0, fs_1.readFileSync)(path_1.default.resolve(__dirname, "./", Qjson));
		res.status(200);
		res.send(file);
	} catch (e) {
		res.status(500);
		res.send(JSON.stringify({ message: e.toString() }));
	}
});
app.get(API_URL + "/getTask", function (req, res) {
	var _a;
	var QDificulty = +(
		((_a = req.query) === null || _a === void 0 ? void 0 : _a.difficulty) || ""
	).toString();
	res.contentType("application/json");
	try {
		(0,
		fs_1.readdir)(path_1.default.resolve(__dirname, "./examples/difficulty_".concat(QDificulty)), function (err, items) {
			var fileName = randEl(items || []);
			if (!fileName) {
				res.status(400);
				res.send("No files in folder");
				return;
			}
			var file = (0, fs_1.readFileSync)(
				path_1.default.resolve(
					__dirname,
					"./examples/difficulty_".concat(QDificulty, "/"),
					fileName
				)
			);
			res.status(200);
			res.send(file);
		});
	} catch (e) {
		res.status(500);
		res.send(JSON.stringify({ message: e.toString() }));
	}
});
app.listen(PORT, function () {
	console.log("App listening on port ".concat(PORT, "\n http://localhost:").concat(PORT, "/"));
});
