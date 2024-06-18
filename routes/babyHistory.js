const express = require("express");
const router = express.Router();
const { Sequelize, Op } = require("sequelize");
const BabyHistory = require("../models/babyhistory");
const Baby = require("../models/baby");

// Get all baby histories
router.get("/babyhistories", async (req, res) => {
    try {
        const babyHistories = await BabyHistory.findAll({ include: Baby });
        res.json(babyHistories);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Get baby history by ID
router.get("/babyhistories/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const babyHistory = await BabyHistory.findByPk(id, { include: Baby });
        if (!babyHistory) {
            return res.status(404).json({ msg: "Baby history not found" });
        }
        res.json(babyHistory);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Create a new baby history
router.post("/babyhistories", async (req, res) => {
    const {
        baby_id,
        check_date,
        weight,
        height,
        head_circumference,
        exclusive_breastfeeding,
        vit_a,
        pmba,
        puskesmas_location,
    } = req.body;

    try {
        const newBabyHistory = await BabyHistory.create({
            baby_id,
            check_date,
            weight,
            height,
            head_circumference,
            exclusive_breastfeeding,
            vit_a,
            pmba,
            puskesmas_location,
        });

        res.json({
            msg: "Baby history created successfully",
            babyHistory: newBabyHistory,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Update a baby history
router.put("/babyhistories/:id", async (req, res) => {
    const { id } = req.params;
    const {
        check_date,
        weight,
        height,
        head_circumference,
        exclusive_breastfeeding,
        vit_a,
        pmba,
    } = req.body;

    try {
        let babyHistory = await BabyHistory.findByPk(id);
        if (!babyHistory) {
            return res.status(404).json({ msg: "Baby history not found" });
        }

        await babyHistory.update({
            check_date,
            weight,
            height,
            head_circumference,
            exclusive_breastfeeding,
            vit_a,
            pmba,
        });

        res.json({ msg: "Baby history updated successfully", babyHistory });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Delete a baby history
router.delete("/babyhistories/:id", async (req, res) => {
    const { id } = req.params;

    try {
        let babyHistory = await BabyHistory.findByPk(id);
        if (!babyHistory) {
            return res.status(404).json({ msg: "Baby history not found" });
        }

        await babyHistory.destroy();
        res.json({ msg: "Baby history deleted successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Get all baby histories with stunting or malnutrition
router.get("/stunting-malnutrition", async (req, res) => {
    try {
        const conditionIds = [4, 5, 6]; // Assuming 4 is "Stunting", 5 is "Gizi Buruk", and 6 is "Keduanya"
        const babyHistories = await BabyHistory.findAll({
            include: {
                model: Baby,
                where: { condition_id: conditionIds },
            },
        });
        res.json(babyHistories);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message });
    }
});

router.get("/stunting", async (req, res) => {
    try {
        const conditionIds = [4, 6]; // Assuming 4 is "Stunting", 5 is "Gizi Buruk", and 6 is "Keduanya"
        const babyHistories = await BabyHistory.findAll({
            include: {
                model: Baby,
                where: { condition_id: conditionIds },
            },
        });
        res.json(babyHistories);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message });
    }
});

router.get("/malnutrition", async (req, res) => {
    try {
        const conditionIds = [5, 6];
        const babyHistories = await BabyHistory.findAll({
            include: {
                model: Baby,
                where: { condition_id: conditionIds },
            },
        });
        res.json(babyHistories);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message });
    }
});

// Get stunting cases by year and month with condition_id
router.get("/stunting/:year/:month", async (req, res) => {
    const { year, month } = req.params;
    const startDate = new Date(year, month - 1, 1); // First day of the month
    const endDate = new Date(year, month, 0, 23, 59, 59); // Last day of the month

    try {
        const conditionIds = [4, 6]; // Assuming 4 is "Stunting" and 6 is "Keduanya"
        const stuntingCases = await BabyHistory.findAll({
            where: {
                check_date: {
                    [Op.between]: [startDate, endDate],
                },
            },
            include: {
                model: Baby,
                where: { condition_id: conditionIds },
            },
        });
        res.json(stuntingCases);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message });
    }
});

// Get malnutrition cases by year and month with condition_id
router.get("/malnutrition/:year/:month", async (req, res) => {
    const { year, month } = req.params;
    const startDate = new Date(year, month - 1, 1); // First day of the month
    const endDate = new Date(year, month, 0, 23, 59, 59); // Last day of the month

    try {
        const conditionIds = [5, 6]; // Assuming 5 is "Gizi Buruk" and 6 is "Keduanya"
        const malnutritionCases = await BabyHistory.findAll({
            where: {
                check_date: {
                    [Op.between]: [startDate, endDate],
                },
            },
            include: {
                model: Baby,
                where: { condition_id: conditionIds },
            },
        });
        res.json(malnutritionCases);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message });
    }
});

// Get baby histories by puskesmas_location
router.get("/babyhistories/location/:location", async (req, res) => {
    try {
        const babyHistories = await BabyHistory.findAll({
            include: [
                {
                    model: Baby,
                    where: { puskesmas_location: req.params.location },
                },
            ],
        });
        res.json(babyHistories);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
