const jwt = require("jsonwebtoken");

const issueToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1hr",
  });
  return token;
};

module.exports = {
  issueToken,
};
