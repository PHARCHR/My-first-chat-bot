const Messages = require("../models/messages");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const getResponseFromChatbot = async (userInput) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    await Messages.create({
      role: "user",
      parts: [{ text: userInput }],
    });
    const temp = await Messages.find({}).sort({ createdAt: -1 }).limit(5);
    const history = temp.map(({ role, parts }) => ({
      role: role,
      parts: parts.map(({ text }) => ({ text })),
    }));
    const chat = model.startChat({ history });
    const result = await chat.sendMessage(userInput);
    const finalResult = result.response.text();

    await Messages.create({
      role: "model",
      parts: [{ text: finalResult }],
    });

    return finalResult;
  } catch (error) {
    console.error(error.message);
    return "Couldn't get a response";
  }
};
module.exports = getResponseFromChatbot;
