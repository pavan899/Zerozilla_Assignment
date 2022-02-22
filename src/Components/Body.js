import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Body.css";
import Card from "./Card.js";
import { Link } from "react-router-dom";

const Body = (props) => {
  const [categories, updateCategories] = useState(null);
  const [products, updateProducts] = useState(null);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((categories) => {
        updateCategories(categories.data);
      })
      .catch((e) => {
        console.log("error: " + e);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((product) => {
        updateProducts(product.data);
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  }, []);
  return (
    <div>
      <div className="categoryMenu">
        {categories
          ? categories.map((cat, index) => (
              <Link
                key={index}
                to={"/Category?" + cat}
                style={{ textDecoration: "none" }}
              >
                <div className="category">{cat}</div>
              </Link>
            ))
          : ""}
      </div>
      <div className="cardContainer">
        {products
          ? products
              .filter((value) =>
                value.title
                  .toLowerCase()
                  .includes(props.searchValue.toLowerCase())
              )
              .map((data) => (
                <div className="Card" key={data.id}>
                  <Link
                    to={"/Product?" + data.id}
                    style={{ textDecoration: "none" }}
                  >
                    <Card data={data} />
                  </Link>
                </div>
              ))
          : "loading..."}
      </div>
    </div>
  );
};
export default Body;
