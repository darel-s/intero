const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("posyandu", "root", null, {
    host: "localhost",
    dialect: "mysql",
    port: 3308, //Tolong ganti lur
    logging: console.log,
});

module.exports = sequelize;
