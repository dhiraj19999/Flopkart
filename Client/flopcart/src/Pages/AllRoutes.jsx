import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import Home from "./Home/Home";
import Product from "./ProductPage/Product";
import SingleProduct from "./SingleProduct/SingleProduct";
import UserAccount from "./UserAccount/UserAccount";
import UserAccountAdmin from "./Admin/UserAccountAdmin";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="/products/:name" element={<Product />}>
        Product List
      </Route>
      <Route path="/product/:id" element={<SingleProduct />}>
        Single Product
      </Route>
      <Route path="/cart" element={<Cart />}>
        Cart
      </Route>
      <Route path="/checkout" element={<Checkout />}>
        Checkout
      </Route>
      <Route path="/myprofile" element={<UserAccount />}>
        Checkout
      </Route>
      <Route path="/admin" element={<UserAccountAdmin />} />
    </Routes>
  );
};

export default AllRoutes;
