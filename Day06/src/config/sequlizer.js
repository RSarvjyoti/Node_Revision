const sequelize = require('sequelize');

const sequelize = Sequelize('user', 'root', 'Sarv@123', {
    host: 'localhost',
    dialect: 'mysql' 
  });

module.exports = sequelize;