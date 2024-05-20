"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("puskesmas", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            location: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("puskesmas");
    },
};
