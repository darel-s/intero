"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("baby_history", {
            id_check: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            baby_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "babies",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
            },
            check_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            weight: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            height: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            head_circumference: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            exclusive_breastfeeding: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            vit_a: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            pmba: {
                type: Sequelize.STRING,
                allowNull: true,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("baby_history");
    },
};
