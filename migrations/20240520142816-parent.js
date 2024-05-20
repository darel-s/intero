"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("parents", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            parent_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            kk_number: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            nik: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            phone_number: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            address: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            rt: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            rw: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("parents");
    },
};
