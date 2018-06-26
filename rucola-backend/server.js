const express = require("express");
const bodyParser = require("body-parser");
const log = require("debug")("server");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  log(`Server listening on ${PORT}`);
});
