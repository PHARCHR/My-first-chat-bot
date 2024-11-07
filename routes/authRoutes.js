const express = require("express");
const { signUp, login, logout } = require("../controllers/authControllers");
const authRouter = express.Router();

authRouter.post("/signUp", signUp);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
module.exports = authRouter;
