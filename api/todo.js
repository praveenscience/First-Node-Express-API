const express = require("express");
const app = express.Router();

let ToDos = [];

app.get("/", (req, res) => {
  res.json(ToDos);
});
app.post("/", express.json(), (req, res) => {
  if (typeof req.body.text !== "undefined") {
    ToDos.push(req.body.text);
    res.json(ToDos.length - 1);
  } else {
    res.status(400).json("You have to enter text.");
  }
});

module.exports = app;
