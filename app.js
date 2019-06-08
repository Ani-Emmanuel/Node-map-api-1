const express = require("express");
var app = express();
var db = require("./db");

var MapController = require("./map/Map_Controller");
app.use("/suggestion", MapController);

module.exports = app;
