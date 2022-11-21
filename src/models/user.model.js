const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  order: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Product",
    required: true,
  },
  orderId: {
    type: String,
  },
  totalAmount: {
    type: Number,
  },
});

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    orders: {
      type: [OrderSchema],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
