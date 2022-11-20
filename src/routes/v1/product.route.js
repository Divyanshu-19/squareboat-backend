const express = require("express");

const { productController } = require("../../controllers");

const router = express.Router();

router.post("/product", productController.createProduct);
router.post("/injectproduct", productController.injectProducts);
router.get("/product", productController.getAllProducts);
router.get("/product/:id", productController.getSingleProduct);

module.exports = router;
