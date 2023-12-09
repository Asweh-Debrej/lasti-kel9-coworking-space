const Member = require("../models/member");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Member.findOne({ email });
    if (!user || !email || !password) throw new Error("Invalid login");

    if (!bcrypt.compareSync(password, user.password))
      throw new Error("Invalid login");

    const token = jwt.sign(
      { name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "10d" }
    );

    res
      .status(200)
      .json({ name: user.name, email: user.email, phone: user.phone, token });
  } catch (e) {
    console.error(e);
    e.message === "Invalid login"
      ? res.status(400).json({ message: e.message })
      : res.status(500).send();
  }
};

const register = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    password = bcrypt.hashSync(req.body.password);
    const newMember = new Member({ name, email, password, phone });
    await newMember.save();
    res.status(201).json({
      _id: newMember._id,
      name,
      email,
      phone,
      createdAt: newMember.createdAt,
    });
  } catch (e) {
    if (e.name === "ValidationError")
      return res.status(400).json({ message: e.message });
    if (e.message.includes("E11000"))
      return res.status(400).json({ message: "Duplicate email address" });
    console.error(e);
    res.status(500).send();
  }
};

const getProfile = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: "Unauthorized" });

  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Member.findOne({ email: decoded.email });
    res
      .status(200)
      .json({ name: user.name, email: user.email, phone: user.phone });
  } catch (e) {
    console.error(e);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = {
  login,
  register,
  getProfile,
};
