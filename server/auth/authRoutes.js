const express = require("express");
const router = express.Router();;
const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

router.post("/register", async(req, res) => {
    try {
        const { email, password } = req.body;

        // create a user
        const user = await User.create({
            email,
            password,
        });

        // generate a JWT token, these are good for additional security measures and they are stateless so the server doesnt store the user's session info
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)

        const expire = 60 * 60; // 1 hour

        res.status(201).json({ message: "User registered", token, expire });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body;

        // check if email exists already
        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
