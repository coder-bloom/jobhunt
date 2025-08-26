const express = require("express");
const { register, login } = require("../controller/usercontroller");
const userrouter = express.Router();

userrouter.post("/user/register" , register);
userrouter.post("/user/login", login)

module.exports = userrouter;