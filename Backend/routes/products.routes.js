const express = require("express");
const { ProductModel } = require("../model/products.model");
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const products = await ProductModel.find().limit(10);
  res.status(201).json(products);
});

module.exports = {
  productRouter,
};
