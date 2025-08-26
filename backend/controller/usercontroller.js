const usermodel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const register = async (req, res) => {
  
  try {
    let { name, email, password, work_status, number } = req.body;
    console.log("Incoming data at backend:", req.body); 

    let existinguser = await usermodel.findOne({ email: email });
    if (existinguser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (!password || password.length < 6) {
  return res.status(400).json({ message: "Password must be at least 6 characters" });
}

if (!/^[0-9]{10}$/.test(number)) {
  return res.status(400).json({ message: "Invalid phone number" });
}


    const hash = await bcrypt.hash(password, 12);

    let registered_user = await usermodel.create({
      name,
      email,
      password: hash,
      work_status,
      number,
    });

    return res
      .status(201)
      .json({ message: "User created successfully", user: registered_user });
  } catch (error) {
    console.log("Signup error:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    let existinguser = await usermodel.findOne({ email: email });
    if (!existinguser) {
      return res.status(400).json({ message: "User does not exist" });
    }
    
    let is_match = await bcrypt.compare(password, existinguser.password);
    if (!is_match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    let token = jwt.sign(
      { userid: existinguser._id, work_status: existinguser.work_status },
      process.env.SECRET_KEY,
      { expiresIn: "2d" }
    );

    let user = {
      name: existinguser.name,
      email: existinguser.email,
      work_status: existinguser.work_status,
      number: existinguser.number,
    };

    return res
      .status(200)
      .json({ message: "Login successful", token, user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { register, login };
