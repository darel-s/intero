const express = require("express");
const router = express.Router();
const { Sequelize, Op } = require("sequelize");
const Baby = require("../models/baby");
const Parent = require("../models/parent");
const HealthCondition = require("../models/healthcondition");

// Get all babies
router.get("/babies", async (req, res) => {
    try {
        const babies = await Baby.findAll({
            include: [
                Parent,
                {
                    model: HealthCondition,
                    as: "HealthCondition", // pastikan menggunakan alias yang benar jika ada
                },
            ],
        });
        res.json(babies);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Get baby by ID
router.get("/babies/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const baby = await Baby.findByPk(id, {
            include: [
                Parent,
                { model: HealthCondition, as: "HealthCondition" },
            ],
        });
        if (!baby) {
            return res.status(404).json({ msg: "Baby not found" });
        }
        res.json(baby);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Create a new baby
router.post("/babies", async (req, res) => {
    const {
        baby_name,
        birth_date,
        gender,
        nik,
        parent_id,
        birth_weight,
        birth_height,
        condition_id,
        puskesmas_location,
    } = req.body;

    try {
        const newBaby = await Baby.create({
            baby_name,
            birth_date,
            gender,
            nik,
            parent_id,
            birth_weight,
            birth_height,
            condition_id,
            puskesmas_location,
        });

        res.json({ msg: "Baby created successfully", baby: newBaby });
    } catch (err) {
        console.error(err.message);
        console.error(err);
        res.status(500).send("Server error");
    }
});

// Update a baby
router.put("/babies/:id", async (req, res) => {
    try {
        const parentExists = await Parent.findByPk(req.body.parent_id);
        if (!parentExists) {
            return res.status(400).send("Parent not found");
        }

        await Baby.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        res.json({ msg: "Baby updated successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Delete a baby
router.delete("/babies/:id", async (req, res) => {
    const { id } = req.params;

    try {
        let baby = await Baby.findByPk(id);
        if (!baby) {
            return res.status(404).json({ msg: "Baby not found" });
        }

        await baby.destroy();

        res.json({ msg: "Baby deleted successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Get babies by puskesmas_location
router.get("/babies/location/:location", async (req, res) => {
    try {
        const babies = await Baby.findAll({
            include: [
                {
                    model: Parent,
                    where: { puskesmas_location: req.params.location },
                    attributes: ["id"],
                },
            ],
        });
        res.json(babies);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
