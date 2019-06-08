// module for all private informations
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  db: process.env.DB_CONNECTION,
  port: process.env.PORT
};
