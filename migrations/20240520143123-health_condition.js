"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("health_condition", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            condition: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("health_condition");
    },
};
