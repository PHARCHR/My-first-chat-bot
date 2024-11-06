const jwt = require("jsonwebtoken");
const BadRequest = require("../error/BadRequest");
const authentication = (req, res, next) => {
  try {
    const { jwt: token } = req.cookies;
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
  } catch (error) {
    throw new BadRequest("YOUR ARE NOT AUTHORIZED");
  }

  next();
};
module.exports = authentication;
