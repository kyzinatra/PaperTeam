import express from "express";
const app = express();
const port = 3000;

app.use(express.static("web/public"));

app.get("/", (req, res) => {
  res.send("Пашел нахуй!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}\n http://localhost:${port}/`);
});
