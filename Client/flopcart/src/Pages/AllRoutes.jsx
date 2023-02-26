import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import Home from "./Home/Home";
import Product from "./ProductPage/Product";
import SingleProduct from "./SingleProduct/SingleProduct";
import UserAccount from "./UserAccount/UserAccount";
<<<<<<< HEAD
import UserAccountAdmin from "./Admin/UserAccountAdmin";
=======
import AdninProduct from "../Components/Admin/AdminProduct";
import { NewHome } from "../Components/NewHome/NewHome";
>>>>>>> b9ffb9e437e0755ecd141bec5a9edec10dc5d7ec
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
<<<<<<< HEAD
      <Route path="/admin" element={<UserAccountAdmin />} />
=======
      <Route path="/Adminsingle/:id" element={<AdninProduct />} />
>>>>>>> b9ffb9e437e0755ecd141bec5a9edec10dc5d7ec
    </Routes>
  );
};

export default AllRoutes;
