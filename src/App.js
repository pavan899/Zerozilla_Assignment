import React, { useState } from "react";
import "./styles.css";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import Cart from "./Components/Cart.js";
import Profile from "./Components/Profile.js";
import Category from "./Components/Category.js";
import Product from "./Components/Product.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const [searched, updateSearched] = useState("");
  const [cartItems, updateCartItems] = useState([]);
  const searchedvalue = (value) => {
    updateSearched(value);
  };
  const updateCart = (item) => {
    updateCartItems((prevState) => [...prevState, item]);
    alert("item added to cart");
  };
  return (
    <Router>
      <div className="App">
        <Header updateSearch={searchedvalue} cartCount={cartItems} />
        <Routes>
          <Route path="" exact element={<Body searchValue={searched} />} />
          <Route
            path="/Category"
            exact
            element={<Category searchValue={searched} />}
          />
          <Route path="/Cart" exact element={<Cart cartValue={cartItems} />} />
          <Route path="/Profile" exact element={<Profile />} />
          <Route
            path="/Product"
            exact
            element={<Product cartupdate={updateCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
