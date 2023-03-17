require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  multipleStatements: true
});

module.exports = connection;