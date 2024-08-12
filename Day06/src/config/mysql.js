const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'user',
  password : 'Sarv@123'
});


module.exports = connection;