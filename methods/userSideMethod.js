const getResponseFromChatbot = require("./assitantSideMethod");
const sendRequest = async (userInput) => {
  const response = await getResponseFromChatbot(userInput);
  console.log(`Chat Bot: ${response}`);
  return response;
};
module.exports = sendRequest;
