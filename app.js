const express = require("express");
const morgan = require("morgan");
const CORS = require("./cors");
const app = express();
const port = 3000;
const api = require("./api/root");

app.use(morgan("combined"));
app.use(CORS);

app.use("/api", api);

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
