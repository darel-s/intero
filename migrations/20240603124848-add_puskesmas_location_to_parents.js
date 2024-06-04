module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn("parents", "puskesmas_location", {
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
        await queryInterface.removeColumn("parents", "puskesmas_location");
    },
};
