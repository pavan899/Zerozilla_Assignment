import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.js";
import "./Styles/Category.css";
import { Link } from "react-router-dom";

const Category = (props) => {
  const [products, updateProducts] = useState(null);
  let catValue = window.location.search.substring(1);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/" + catValue)
      .then((product) => {
        updateProducts(product.data);
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  }, [catValue]);
  return (
    <div>
      <div className="catTitle">{unescape(catValue)}</div>
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

export default Category;
