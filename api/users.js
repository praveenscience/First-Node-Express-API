const express = require("express");
const app = express.Router();

app.get("/", (req, res) => {
  res.json("This is in /api/users");
});

module.exports = app;
