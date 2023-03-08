require("dotenv").config();
const { createPool } = require('mysql');

let connection = createPool({
    HOST: process.env.HOST,
    USER: process.env.USER ,
    PASSWORD: process.env.PASSWORD,
    PORT: process.env.PORT,
    DB: process.env.DB,
    multipleStatements: true

  });
  module.exports = connection;