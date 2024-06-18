const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("posyandu", "root", null, {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    logging: console.log,
});

module.exports = sequelize;
