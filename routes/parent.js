const express = require("express");
const router = express.Router();
const Parent = require("../models/parent");

// Get all parents
router.get("/parents", async (req, res) => {
    try {
        const parents = await Parent.findAll();
        res.json(parents);
    } catch (err) {
        console.error(err.message);
        console.log(err);
        res.status(500).send("Server error");
    }
});

// Get parent by ID
router.get("/parents/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const parent = await Parent.findByPk(id);
        if (!parent) {
            return res.status(404).json({ msg: "Parent not found" });
        }
        res.json(parent);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Create a new parent
router.post("/parents", async (req, res) => {
    const {
        parent_name,
        kk_number,
        nik,
        phone_number,
        address,
        rt,
        puskesmas_location,
    } = req.body;
    try {
        const parent = await Parent.create({
            parent_name,
            kk_number,
            nik,
            phone_number,
            address,
            rt,
            puskesmas_location,
        });
        res.status(201).json(parent);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Update a parent
router.put("/parents/:id", async (req, res) => {
    const { id } = req.params;
    const { parent_name, kk_number, nik, phone_number, address, rt, rw } =
        req.body;

    try {
        let parent = await Parent.findByPk(id);
        if (!parent) {
            return res.status(404).json({ msg: "Parent not found" });
        }

        await parent.update({
            parent_name,
            kk_number,
            nik,
            phone_number,
            address,
            rt,
            rw,
        });

        res.json({ msg: "Parent updated successfully", parent });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Delete a parent
router.delete("/parents/:id", async (req, res) => {
    const { id } = req.params;

    try {
        let parent = await Parent.findByPk(id);
        if (!parent) {
            return res.status(404).json({ msg: "Parent not found" });
        }

        await parent.destroy();

        res.json({ msg: "Parent deleted successfully" });
    } catch (err) {
        console.error(err.message);
        console.error(err);
        res.status(500).send("Server error");
    }
});

// Get parents by puskesmas_location
router.get("/parents/location/:location", async (req, res) => {
    try {
        const parents = await Parent.findAll({
            where: {
                puskesmas_location: req.params.location,
            },
        });
        res.json(parents);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
