const mongoose = require("mongoose");
const connect = async (url) => {
  try {
    await mongoose.connect(url);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connect;
