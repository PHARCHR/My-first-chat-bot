const express = require("express");
const router = express.Router();
const startChat = require("../methods/mergerMethod");

router.post("/", startChat);
module.exports = router;
