var express = require("express");
var app = express();
var os = require("os")

// Variables
const hostName = os.hostname();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/url", (req, res, next) => {
  res.json("hostname");
 })