"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "user_types",
            [
                {
                    type: "puskesmas",
                },
                {
                    type: "kader",
                },
                {
                    type: "perangkat desa",
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("user_types", null, {});
    },
};
