const express = require("express");
const router = express.Router();
const startChat = require("../controllers/botController");

router.post("/", startChat);
module.exports = router;
