const express = require("express");
const router = express.Router();
const Puskesmas = require("../models/puskesmas");
const Parent = require("../models/parent");
const Baby = require("../models/baby");
const BabyHistory = require("../models/babyhistory");
const HealthCondition = require("../models/healthcondition");

// Get all puskesmas
router.get("/puskesmas", async (req, res) => {
    try {
        const puskesmas = await Puskesmas.findAll();
        res.json(puskesmas);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Get puskesmas by ID
router.get("/puskesmas/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const puskesmas = await Puskesmas.findByPk(id);
        if (!puskesmas) {
            return res.status(404).json({ msg: "Puskesmas not found" });
        }
        res.json(puskesmas);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Create a new puskesmas
router.post("/puskesmas", async (req, res) => {
    const { location } = req.body;

    try {
        const newPuskesmas = await Puskesmas.create({ location });
        res.json({
            msg: "Puskesmas created successfully",
            puskesmas: newPuskesmas,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Update a puskesmas
router.put("/puskesmas/:id", async (req, res) => {
    const { id } = req.params;
    const { location } = req.body;

    try {
        let puskesmas = await Puskesmas.findByPk(id);
        if (!puskesmas) {
            return res.status(404).json({ msg: "Puskesmas not found" });
        }

        await puskesmas.update({ location });
        res.json({ msg: "Puskesmas updated successfully", puskesmas });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Delete a puskesmas
router.delete("/puskesmas/:id", async (req, res) => {
    const { id } = req.params;

    try {
        let puskesmas = await Puskesmas.findByPk(id);
        if (!puskesmas) {
            return res.status(404).json({ msg: "Puskesmas not found" });
        }

        await puskesmas.destroy();
        res.json({ msg: "Puskesmas deleted successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Get puskesmas stats
router.get("/puskesmas-stats/:puskesmas_id", async (req, res) => {
    try {
        const parentCount = await Parent.count({
            where: {
                puskesmas_location: req.params.puskesmas_id,
            },
        });

        const babyCount = await Baby.count({
            where: {
                puskesmas_location: req.params.puskesmas_id,
            },
        });

        const healthyBabyCount = await Baby.count({
            where: {
                puskesmas_location: req.params.puskesmas_id,
                condition_id: 1,
            },
        });

        const stuntingBabyCount = await Baby.count({
            where: {
                puskesmas_location: req.params.puskesmas_id,
                condition_id: 4,
            },
        });

        const giziBurukBabyCount = await Baby.count({
            where: {
                puskesmas_location: req.params.puskesmas_id,
                condition_id: 5,
            },
        });

        const babyHistoryCount = await BabyHistory.count({
            where: {
                puskesmas_location: req.params.puskesmas_id,
            },
        });

        res.json({
            parent_count: parentCount,
            baby_count: babyCount,
            healthy_baby_count: healthyBabyCount,
            baby_history_count: babyHistoryCount,
            stuntingBabyCount: stuntingBabyCount,
            gizi_buruk_baby_count: giziBurukBabyCount,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
