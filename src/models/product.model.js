const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    requried: true,
  },
  type: {
    type: String,
    enum: ["MOBILE", "TV", "LAPTOP"],
  },
  features: {
    type: [String],
    default: [],
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
