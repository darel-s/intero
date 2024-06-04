module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn("baby_history", "puskesmas_location", {
            type: Sequelize.INTEGER,
            nullable: false,
            references: {
                model: "Puskesmas",
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL",
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn("baby_history", "puskesmas_location");
    },
};
