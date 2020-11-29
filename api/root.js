const express = require("express");
const app = express.Router();
const users = require("./users");
const todo = require("./todo");

app.get("/", (req, res) => {
  res.json("This is in /api");
});

app.use("/users", users);
app.use("/todo", todo);

module.exports = app;
