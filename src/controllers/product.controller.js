const Product = require("../models/product.model");
const data = require("../data/data");

const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      type: req.body.type,
      features: req.body.features,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
    });
    return res.status(201).json({
      status: "OK",
      result: {
        msg: "Product Created",
      },
    });
  } catch (err) {
    return res.status(400);
  }
};

const injectProducts = async (req, res) => {
  for (let i = 0; i < data.length; i++) {
    try {
      const product = await Product.create({
        name: data[i].name,
        type: data[i].type,
        features: data[i].features,
        description: data[i].description,
        price: data[i].price,
        image: data[i].image,
      });
    } catch (err) {
      console.log(err);
    }
  }
  // console.log(data);
  res.json({ status: "OK" });
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "OK",
      length: products.length,
      result: products,
    });
  } catch {
    res.status(400);
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "OK",
      result: product,
    });
  } catch (err) {
    res.status(400);
  }
};

module.exports = {
  createProduct,
  injectProducts,
  getAllProducts,
  getSingleProduct,
};
