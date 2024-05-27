"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const parents = [
            {
                parent_name: "Andi Setiawan",
                kk_number: "1234567890123456",
                nik: "9876543210123456",
                phone_number: "081234567890",
                address: "Kelurahan Sendang Sari, Pengasih, Kulon Progo",
                rt: "001",
                rw: "002",
            },
            {
                parent_name: "Budi Santoso",
                kk_number: "2345678901234567",
                nik: "8765432101234567",
                phone_number: "081234567891",
                address: "Kelurahan Sendang Sari, Pengasih, Kulon Progo",
                rt: "002",
                rw: "003",
            },
            {
                parent_name: "Cici Rahmawati",
                kk_number: "3456789012345678",
                nik: "7654321012345678",
                phone_number: "081234567892",
                address: "Kelurahan Sendang Sari, Pengasih, Kulon Progo",
                rt: "003",
                rw: "004",
            },
            {
                parent_name: "Dedi Sutrisno",
                kk_number: "4567890123456789",
                nik: "6543210123456789",
                phone_number: "081234567893",
                address: "Kelurahan Sendang Sari, Pengasih, Kulon Progo",
                rt: "004",
                rw: "005",
            },
            {
                parent_name: "Eka Susanti",
                kk_number: "5678901234567890",
                nik: "5432101234567890",
                phone_number: "081234567894",
                address: "Kelurahan Sendang Sari, Pengasih, Kulon Progo",
                rt: "005",
                rw: "006",
            },
            {
                parent_name: "Feri Kusuma",
                kk_number: "6789012345678901",
                nik: "4321012345678901",
                phone_number: "081234567895",
                address: "Kelurahan Sendang Sari, Pengasih, Kulon Progo",
                rt: "006",
                rw: "007",
            },
            {
                parent_name: "Gina Marlina",
                kk_number: "7890123456789012",
                nik: "3210123456789012",
                phone_number: "081234567896",
                address: "Kelurahan Sendang Sari, Pengasih, Kulon Progo",
                rt: "007",
                rw: "008",
            },
            {
                parent_name: "Hadi Prasetyo",
                kk_number: "8901234567890123",
                nik: "2101234567890123",
                phone_number: "081234567897",
                address: "Kelurahan Sendang Sari, Pengasih, Kulon Progo",
                rt: "008",
                rw: "009",
            },
            {
                parent_name: "Indra Gunawan",
                kk_number: "9012345678901234",
                nik: "1012345678901234",
                phone_number: "081234567898",
                address: "Kelurahan Sendang Sari, Pengasih, Kulon Progo",
                rt: "009",
                rw: "010",
            },
            {
                parent_name: "Joko Widodo",
                kk_number: "0123456789012345",
                nik: "0123456789012345",
                phone_number: "081234567899",
                address: "Kelurahan Sendang Sari, Pengasih, Kulon Progo",
                rt: "010",
                rw: "011",
            },
        ];

        await queryInterface.bulkInsert("parents", parents, {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("parents", null, {});
    },
};
