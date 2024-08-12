const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("user", "root", "Sarv@123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
