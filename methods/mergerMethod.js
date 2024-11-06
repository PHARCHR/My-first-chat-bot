const sendRequest = require("./userSideMethod");
const startChat = async (req, res) => {
  const response = await sendRequest(req.body.message);
  res.send(response);
};
module.exports = startChat;
