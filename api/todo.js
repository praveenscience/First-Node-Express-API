const express = require("express");
const app = express.Router();

let ToDos = [];

app.get("/", (req, res) => {
  res.json(ToDos);
});
app.get("/:ToDoId", (req, res) => {
  const { ToDoId } = req.params;
  if (ToDos[+ToDoId]) {
    res.json(ToDos[+ToDoId]);
  } else {
    res.status(404).json("ToDo Item Not Found!");
  }
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
