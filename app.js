const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  let resp = "Welcome to API Server!";
  if (req.headers["user-agent"].toLowerCase().indexOf("postman") > -1) {
    resp = "Hello developer!";
  }
  res.json(resp);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
