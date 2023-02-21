const express = require("express");
const { ProductModel } = require("../model/products.model");
const productRouter = express.Router();

// get products --->
productRouter.get("/", async (req, res) => {
  const limit = req.query.limit || 10;
  const page = Math.max(0, req.query.page || 0);
  let q = req.query.q;
  try {
    if (q) {
      // search functionality
      const product = await ProductModel.find({
        product_name: { $regex: q, $options: "$i" },
      })
        .limit(limit)
        .skip(limit * page);
      res.status(201).json({ data: product, status: "Success" });
      return;
    }
    const product = await ProductModel.find()
      .limit(limit)
      .skip(limit * page);
    res.status(201).json({ data: product, status: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "Failed" });
  }
});

// get product by id

productRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.find({ _id: id });
    res.status(201).json({ data: product, status: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "Failed" });
  }
});

// update product by id

productRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(201).json({ message: "Data update successfully", status: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "Failed" });
  }
});

// delete product by id 



module.exports = {
  productRouter,
};
