"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("babies", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            baby_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            birth_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            gender: {
                type: Sequelize.ENUM("Male", "Female"),
                allowNull: false,
            },
            nik: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            parent_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "parents",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
            },
            birth_weight: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            birth_height: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            condition_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "health_condition",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("babies");
    },
};
