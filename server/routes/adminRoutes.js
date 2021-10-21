const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
require("dotenv").config();
const {
    registerAController,
    loginController,
  } = require("../controllers/adminController");

router.post(
  "/adminRegister",
  body("email", "invalid email").isEmail(),
  body("password", "password must be at least 6 characters").isLength({
    min: 5,
  }),
  registerAController
);
router.post("/login", loginController);

module.exports = router;
