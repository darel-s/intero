"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "health_condition",
      [
        {
          condition: "Sehat",
        },
        {
          condition: "Terindikasi Stunting",
        },
        {
          condition: "Terindikasi Gizi Buruk",
        },
        {
          condition: "Stunting",
        },
        {
          condition: "Gizi Buruk",
        },
        {
          condition: "Keduanya",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("health_condition", null, {});
  },
};
