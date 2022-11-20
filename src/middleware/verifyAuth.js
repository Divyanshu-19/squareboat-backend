const jwt = require("jsonwebtoken");

const verifyAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ status: "ERROR", msg: "Token Not Accessable" });
  } else {
    const tokenId = token.split(" ")[1];
    jwt.verify(tokenId, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ status: "ERROR", msg: "Invalid Token" });
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
};

module.exports = verifyAuth;
