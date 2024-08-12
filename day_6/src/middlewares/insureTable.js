const connection = require("../configs/db");

const ensureTable = (req, res, next) => {
  connection.query(
    `CREATE TABLE IF NOT EXISTS todos(
      id INT PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      status BOOL DEFAULT FALSE
    )`,
    (err, result) => {
      if (err) console.log(` we got the error while creating the table ${err}`);
      else {
        next();
      }
    }
  );
};

module.exports = ensureTable;
