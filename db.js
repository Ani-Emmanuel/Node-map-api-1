const mongoose = require("mongoose");
const database = require("./config").db;
mongoose.connect(database);
