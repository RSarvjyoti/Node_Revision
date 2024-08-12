const connection = require("../config/mysql")


const notInsureTable = (req, res, next) =>{
    connection.query(
        `
         id INT AUTO_INCREMENT,
         title VARCHAR(255) NOT NULL,
         status BOOL DEFAULT FALSE,
         PRIMARY KEY (id)
        `
    )
}