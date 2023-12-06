const express = require("express");
const {login,register} = require("../controllers/member");
const router = express.Router();

// Login
router.post("/login", login);

// Register
router.post("/register", register);

module.exports = router;

