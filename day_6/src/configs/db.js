const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sarv@123",
  database: "user",
});

module.exports = connection;
