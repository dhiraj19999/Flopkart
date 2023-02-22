const express = require("express");
const { CartModel } = require("../model/cart.model");
const cartRouter = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Cart:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: The auto-generated id of the product
 *        uniq_id:
 *          type: string
 *          description: A unique id of the product
 *        product_url:
 *          type: string
 *          description: flipkart url for the product
 *        product_name:
 *          type: string
 *          description: name of the product
 *        pid:
 *          type: string
 *          description: product id
 *        retail_price:
 *           type: integer
 *           description: retail price of the product
 *        discounted_price:
 *           type: string
 *           description: discounted price of the product
 *        image:
 *           type: string
 *           description: image of the product
 *        is_FK_Advantage_product:
 *           type: string
 *        description:
 *           type: string
 *           description: description of the product
 *        product_rating:
 *           type: string
 *           description: rating of the product
 *        overall_rating:
 *           type: string
 *           description: overall rating of the product
 *        brand:
 *           type: string
 *           description: name of the brand
 *        product_specifications:
 *           type: string
 *           description: extra specs about the product
 *        authorID:
 *            type: string
 *            description: id of the user who add this product in the cart
 *        quantity:
 *            type: integer
 *            description: default quantity will be 1
 */

cartRouter.get("/", async (req, res) => {
  console.log(req.body);
  try {
    const cart = await CartModel.find({ authorID: req.body.authorID });
    res.status(201).send({ data: cart, status: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "Failed" });
  }
});

cartRouter.post("/add", async (req, res) => {
  try {
    const cart = new CartModel(req.body);
    cart.save();
    res
      .status(201)
      .json({ message: "product added to cart", status: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "Failed" });
  }
});

// for updating cart item
cartRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await CartModel.findByIdAndUpdate({ _id: id }, req.body);
    res
      .status(201)
      .json({ message: "Cart Update successfull", status: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "Failed" });
  }
});

// for deleting cart item
cartRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await CartModel.findByIdAndDelete({ _id: id });
    res
      .status(201)
      .json({ message: "Cart item deleted successfully", status: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "Failed" });
  }
});

module.exports = {
  cartRouter,
};
