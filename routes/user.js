const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/register", async (req, res) => {
  const {
    full_name,
    username,
    email,
    password,
    user_type_id,
    puskesmas_location,
  } = req.body;

  try {
    let user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({
      full_name,
      username,
      email,
      password,
      user_type_id,
      puskesmas_location,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.json({ msg: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({
        message: "No user found with the provided email",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({
        message: "Password is incorrect",
      });
    }

    const token = jwt.sign({ id: user.id }, "your-secret-key", {
      expiresIn: "60d",
    });

    user.password = undefined;

    res.json({
      message: "User logged in successfully",
      user: user,
      token: token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const {
    full_name,
    username,
    email,
    password,
    user_type_id,
    puskesmas_location,
  } = req.body;

  try {
    let user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(password, salt);
    }

    await user.update(req.body);

    res.json({ msg: "User updated successfully", user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    await user.destroy();

    res.json({ msg: "User deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
