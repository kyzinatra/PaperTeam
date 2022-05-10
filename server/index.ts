import express from "express";
import { readFileSync } from "fs";
import path from "path";
import { spawn } from "child_process";

const API_URL = "/api/v1.0.1";

const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
// ! CROS
const whitelist = ["http://localhost:3000", "http://localhost:9000"];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("ORIGIN: " + origin);
    // if (whitelist.indexOf(origin) !== -1) {
    // } else {
    //   callback("Not allowed by CORS");
    // }
    callback(null, true);
  },
};
app.use(cors(corsOptions));

function getMain(req: express.Request, res: express.Response) {
  res.contentType("text/html");
  try {
    const html = res.send(
      readFileSync(path.resolve(__dirname, "../web/public/index.html"), {
        encoding: "utf8",
      })
    );
    res.status(200);
    return res.send(html);
  } catch (e) {
    res.status(503);
    return res.send(
      readFileSync(path.resolve(__dirname, "../web/public/500.html"), {
        encoding: "utf8",
      })
    );
  }
}

app.get(
  /\.(js|css|map|png|jp[2g]|webp|tiff|jfif|jpeg(2000)?|ico|bem|gif|svg)$/,
  express.static("web/public")
);

app.get("/", getMain);
app.get("/constructor", getMain);
app.get("/contact", getMain);

app.get(API_URL + "/getSolution", (req, res) => {
  const Qpath = (req.query?.path || "").toString();
  const Qflag = req.query?.friendly == "true";
  res.contentType("application/json");
  new Promise((resolve, reject) => {
    const process = spawn("python", [
      "algorithm/main.py",
      "-j",
      `{"horiz":{"A":"1010101","B":"0011100","C":"0101010"},"vert":{"D":"0011","E":"1111","F":"1100","G":"1100","H":"1111","I":"0011"},"padding":{"top":1,"rigth":0.5,"bottom":1,"left":0.5}}`,
    ]);
    process.stdout.on("data", resolve);
    process.stderr.on("data", reject);
  }).then(
    result => {
      res.status(200);
      res.send(result.toString());
    },
    err => {
      res.status(400);
      res.send(JSON.stringify({ message: err.toString() }));
    }
  );
});

app.get(API_URL + "/getJSON", (req, res) => {
  const Qjson = (req.query?.path || "").toString();
  res.contentType("application/json");
  try {
    if (!/.json$/.test(Qjson)) throw Error("INVALID PATH");
    const file = readFileSync(path.resolve(__dirname, "../", Qjson));
    res.status(200);
    res.send(file);
  } catch (e) {
    res.status(500);
    res.send(JSON.stringify({ message: e.toString() }));
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}\n http://localhost:${PORT}/`);
});
