const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("posyandu", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
});

module.exports = sequelize;
