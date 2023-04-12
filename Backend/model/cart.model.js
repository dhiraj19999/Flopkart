const mongoose = require("mongoose");

const reqString = { type: String, required: true };

const cartSchema = mongoose.Schema({
  uniq_id: String,
  crawl_timestamp: String,
  product_url: String,
  product_name: reqString,
  product_category_tree: String,
  pid: String,
  retail_price: reqString,
  discounted_price: reqString,
  image: reqString,
  is_FK_Advantage_product: String,
  description: String,
  product_rating: String,
  overall_rating: String,
  brand: String,
  product_specifications: reqString,
  authorID: String,
  quantity: { type: Number, default: 1 },
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = {
  CartModel,
};
