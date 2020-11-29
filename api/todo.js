const express = require("express");
const app = express.Router();

let ToDos = [];

app.get("/", (req, res) => {
  res.json(ToDos);
});

module.exports = app;
