const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { addMessage, getMessage } = require("../controllers/messageController");

router.post("/addmessage", authMiddleware, addMessage);
router.get("/messages", getMessage);

module.exports = router;
