const express = require("express");
const { login, register, getProfile } = require("../controllers/member");
const router = express.Router();

// Login
router.post("/login", login);

// Register
router.post("/register", register);

// Get profile
router.get("/profile", getProfile);

module.exports = router;
