const mongoose = require("mongoose");

// this module is used to create the database schema or structure
const DbSchema = new mongoose.Schema({
  name: String,
  longitude: String,
  latitude: String
});

//this is used to export the schema
mongoose.model("db_Schema", DbSchema);
module.exports = mongoose.model("db_Schema");
