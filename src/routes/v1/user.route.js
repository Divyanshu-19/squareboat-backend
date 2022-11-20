const express = require("express");

const {
  createUser,
  loginUser,
  getUserData,
  orderHistory,
  buyProduct,
} = require("../../controllers/user.controller");
const verifyAuth = require("../../middleware/verifyAuth");

const router = express.Router();

router.post("/user/register", createUser);
router.post("/user/login", loginUser);
router.get("/user/data", verifyAuth, getUserData);
router.post("/user/buy", verifyAuth, buyProduct);
router.post("/user/orders", verifyAuth, orderHistory);

module.exports = router;
