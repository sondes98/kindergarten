const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
require("dotenv").config();
const {
    registerController,
    loginController,
    updateAccount,
    getUsers,
    getSingleUser,
    deleteAccount,
    addPic,
    updateImage,
  } = require("../controllers/userController");
  const authMiddleware = require('../middleware/authMiddleware');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const router = express.Router();
const cloudinary = require('../helpers/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'images'
  },
});


const upload = multer({ storage });




router.post(
  "/register",
  body("email", "invalid email").isEmail(),
  body("password", "password must be at least 6 characters").isLength({
    min: 5,
  }),
  registerController
);
router.post('/update', upload.single('picture'), authMiddleware, addPic);
router.put('/uploadPic/:id', upload.single('profileImg'), authMiddleware, updateImage);
router.post("/login", loginController);
router.put("/updateInfo/:id", updateAccount);
router.get('/', getUsers);
router.get('/getuser/:id', getSingleUser);
router.delete('/:id', deleteAccount)

module.exports = router;
