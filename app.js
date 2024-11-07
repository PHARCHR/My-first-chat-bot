const mongoose = require("mongoose");
require("dotenv").config();
require("express-async-errors");
const cookieParser = require("cookie-parser");
const authentication = require("./middlewares/authentication");
const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");
const authRouter = require("./routes/authRoutes");
const connect = require("./db/connect");
const botRouter = require("./routes/botRoutes");
const homePage = require("./middlewares/home");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/chatBot", authentication, botRouter);
app.use(homePage);
app.use(notFound);
app.use(errorHandler);
const start = () => {
  try {
    connect(process.env.MONGO_URI||10000);
    app.listen(
      process.env.PORT,
      console.log(`Server running on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.log("COULDN'T SPINN UP THE SEVER");
  }
};
start();
