"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const posyanduLocations = [
            { location: "Posyandu 1" },
            { location: "Posyandu 2" },
            { location: "Posyandu 3" },
            { location: "Posyandu 4" },
            { location: "Posyandu 5" },
            { location: "Posyandu 6" },
            { location: "Posyandu 7" },
            { location: "Posyandu 8" },
            { location: "Posyandu 9" },
            { location: "Posyandu 10" },
            { location: "Posyandu 11" },
            { location: "Posyandu 12" },
            { location: "Posyandu 13" },
            { location: "Posyandu 14" },
            { location: "Posyandu 15" },
        ];

        await queryInterface.bulkInsert("puskesmas", posyanduLocations, {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("puskesmas", null, {});
    },
};
