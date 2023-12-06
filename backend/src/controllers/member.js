const Member = require("../models/member");
const mongoose = require("mongoose");

const login = async (req,res) => {
    res.send()
}

const register = async (req,res) => {
    try {
        const {name, email, password, phone} = req.body
        const newMember = new Member({name, email, password, phone})
        await newMember.save()
        res.status(201).json(newMember)
    } catch (e) {
        console.error(e)
        res.status(500).send()
    }
}

module.exports = {
    login,
    register
};  