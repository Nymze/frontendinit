const path = require("path");
const express = require("express");

var app = require("express")();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/main.css", function(req, res) {
  res.sendFile(__dirname + "/" + "main.css");
});

/* app.get("/", (req, res) => {
  res.status(200).send("WHATABYTE: Food For Devs");
}); */

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
