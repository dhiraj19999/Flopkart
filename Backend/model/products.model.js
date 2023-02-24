const mongoose = require("mongoose");

const reqString = { type: String, required: true };
const reqNumber = { type: Number, required: true };

const allProductsSchema = mongoose.Schema({
  uniq_id: String,
  crawl_timestamp: String,
  product_url: String,
  product_name: reqString,
  product_category_tree: String,
  pid: String,
  retail_price: reqNumber,
  discounted_price: reqNumber,
  image: reqString,
  is_FK_Advantage_product: String,
  description: String,
  product_rating: String,
  overall_rating: String,
  brand: reqString,
  product_specifications: reqString,
});

const ProductModel = mongoose.model("product", allProductsSchema);

module.exports = {
  ProductModel,
};
