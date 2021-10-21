const Admin = require("../models/adminSchema");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const registerAController = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.mapped() });
    }
    const {
      username,
      email,
      password
    } = req.body;
    const existAdmin = await Admin.findOne({ email });
    if (existAdmin) {
      res.status(400).json({ message: "admin already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = await Admin.create({
        username,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      {
        email: newAdmin.email,
        username: newAdmin.username,
        id: newAdmin._id,
        token: newAdmin.token,
      },
      process.env.SECRET_KEY,
      { expiresIn: "30d" }
    );
    res.status(200).json({ admin: newAdmin, token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existAdmin = await Admin.findOne({ email });
    if (!existAdmin) return res.status(400).json({ message: 'you must register first !' });
    const validatePassword = await bcrypt.compare(password, existAdmin.password);
    if (!validatePassword)
      return res.status(401).send({ message: 'Wrong password ! \n Try again!' });
    const token = jwt.sign(
      { id: existAdmin._id, email: existAdmin.email },
      process.env.SECRET_KEY
    );
    return res.json({ user: existAdmin, token });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { registerAController, loginController };
