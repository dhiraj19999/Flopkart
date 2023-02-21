const express = require("express");
const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
  console.log(req.body);
  res.send("Cart Data ");
});

module.exports = {
  cartRouter,
};
