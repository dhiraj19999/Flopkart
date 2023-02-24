const express = require("express");
const { ProductModel } = require("../model/products.model");
const productRouter = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
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
 */

/**
 * @swagger
 * tags:
 *  name: Products
 *  description: All the API routes related to Products
 */

// get products --->

/**
 * @swagger
 * /products?q={query}:
 *    get:
 *      summary: get product by its id
 *      tags: [Products]
 *      parameters:
 *        - in: path
 *          name: q
 *          description: search products by this query
 *          schema:
 *            type: string
 *        - in: path
 *          name: limit
 *          required: false
 *          description: To limit the number of product (by default its 10)
 *          schema:
 *            type: integer
 *        - in: path
 *          name: page
 *          required: false
 *          description: page number  (by default its 0)
 *          schema:
 *            type: integer
 *        - in: path
 *          name: sortBy
 *          required: false
 *          description: sort products by it price ( you can use 'asc' or 'desc' )
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Getting data by search
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  data:
 *                    $ref: '#/components/schemas/Product'
 *                  status:
 *                    type: string
 *                    description: Success
 *        500:
 *          description: Something went wrong
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  status:
 *                    type: string
 *                    description: Failed
 */

productRouter.get("/", async (req, res) => {
  const limit = req.query.limit || 10;
  const page = Math.max(0, req.query.page || 0);
  const sort = req.query.sortBy;
  let q = req.query.q;
  try {
    if (q && sort) {
      // search functionality
      let a;
      if (sort == "asc") {
        a = 1;
      } else if (sort == "desc") {
        a = -1;
      }
      const product = await ProductModel.find({
        product_name: { $regex: q, $options: "$i" },
      })
        .limit(limit)
        .skip(limit * page)
        .sort({ discounted_price: a });
      res.status(201).json({ data: product, status: "Success" });
      return;
    } else if (q) {
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

/**
 * @swagger
 * /products/{id}:
 *    get:
 *      summary: get product by its id
 *      tags: [Products]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Numeric ID of the product to retrieve.
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: Getting data by ID
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  data:
 *                    $ref: '#/components/schemas/Product'
 *                  status:
 *                    type: string
 *                    description: Success
 *        500:
 *          description: Something went wrong
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  status:
 *                    type: string
 *                    description: Failed
 */

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

// add products

/**
 * @swagger
 * /products/add:
 *    post:
 *      summary: add products
 *      tags: [Products]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      responses:
 *        200:
 *          description: Data added Successfuly
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  status:
 *                    type: string
 *                    description: Success
 *        500:
 *          description: Something went wrong
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  status:
 *                    type: string
 *                    description: Failed
 */

productRouter.post("/add", async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    product.save();
    res
      .status(201)
      .json({ message: "Product added successfully", status: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "Failed" });
  }
});

// update product by id

/**
 * @swagger
 * /products/{id}:
 *    patch:
 *      summary: update product by id
 *      tags: [Products]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Numeric ID of the product to retrieve.
 *          schema:
 *            type: integer
 *      requestBody:
 *        required: false
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      responses:
 *        200:
 *          description: Data Updated Successfuly
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  status:
 *                    type: string
 *                    description: Success
 *        500:
 *          description: Something went wrong
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  status:
 *                    type: string
 *                    description: Failed
 */

productRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findByIdAndUpdate({ _id: id }, req.body);
    res
      .status(201)
      .json({ message: "Data update successfully", status: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "Failed" });
  }
});

// delete product by id

/**
 * @swagger
 * /products/{id}:
 *    delete:
 *      summary: delete product by id
 *      tags: [Products]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Numeric ID of the product to retrieve.
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: Data deleted Successfuly
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  status:
 *                    type: string
 *                    description: Success
 *        500:
 *          description: Something went wrong
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  status:
 *                    type: string
 *                    description: Failed
 */

productRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findByIdAndDelete({ _id: id });
    res
      .status(201)
      .json({ message: "Data delete successfully", status: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", status: "Failed" });
  }
});

module.exports = {
  productRouter,
};
