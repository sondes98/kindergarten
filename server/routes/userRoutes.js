const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
require("dotenv").config();
const {
    registerController,
    loginController,
  } = require("../controllers/userController");

router.post(
  "/register",
  body("email", "invalid email").isEmail(),
  body("password", "password must be at least 6 characters").isLength({
    min: 5,
  }),
  registerController
);
router.post("/login", loginController);

module.exports = router;
