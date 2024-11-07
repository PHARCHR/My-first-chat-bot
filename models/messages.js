const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  parts: [
    {
      text: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Messages", messagesSchema);
