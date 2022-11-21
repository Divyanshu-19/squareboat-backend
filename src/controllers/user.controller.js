const User = require("../models/user.model");
const Product = require("../models/product.model");
const bcrypt = require("bcrypt");
const { issueToken } = require("../config/auth");

const createUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const saltRound = 10;

    // Password Encryption
    bcrypt.hash(
      req.body.password,
      saltRound,
      async (err, encryptedPassword) => {
        await User.findByIdAndUpdate(user._id, { password: encryptedPassword });
        return res.status(201).json({
          status: "OK",
          result: {
            msg: "User created",
          },
        });
      }
    );
  } catch (err) {
    return res.status(200).json({
      status: "ERROR",
      msg: "User already exists with same email id",
    });
  }
};

const loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res
      .status(200)
      .json({ status: "ERROR", msg: "User does not exists" });
  }
  console.log(req.body, user);
  bcrypt.compare(req.body.password, user.password, (err, same) => {
    console.log(req.body.password, user);
    console.log(err, same);
    if (err) {
      return res.status(200).json({
        status: "ERROR",
        msg: "Either Username or passowrd is incorrect",
      });
    }
    if (same) {
      console.log("here");
      const token = issueToken({
        email: user.email,
        name: user.name,
      });

      return res.status(200).json({
        status: "OK",
        result: {
          token,
        },
      });
    }
  });
};

const orderHistory = async (req, res) => {
  try {
    console.log("here");
    const user = await User.findOne({ email: req.email }).populate(
      "orders.order"
    );
    console.log(user);

    res.status(200).json({ status: "OK", result: user.orders });
  } catch (err) {
    res.status(400);
  }
};

const buyProduct = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    user.orders.push({
      order: req.body.productId,
      price: req.body.price,
      orderId: Math.random().toString().substr(2, 6),
    });
    await user.save();
    res.status(200).json({ status: "OK" });
  } catch (err) {
    res.status(400).json({ status: "ERROR" });
  }
};

const getUserData = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.email });
    res.status(200).json({
      status: "OK",
      result: {
        email: user.email,
        name: user.name,
        orders: user.orders,
      },
    });
  } catch (err) {
    res
      .status(400)
      .json({ status: "ERROR", msg: "Issue connecting to database" });
  }
};

module.exports = {
  createUser,
  loginUser,
  getUserData,
  orderHistory,
  buyProduct,
};
