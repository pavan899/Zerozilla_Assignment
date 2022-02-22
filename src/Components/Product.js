import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  const [productData, updateproductData] = useState(null);
  let catValue = window.location.search.substring(1);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + catValue)
      .then((product) => {
        updateproductData(product.data);
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  }, [catValue]);

  const addtoCart = (e) => {
    e.preventDefault();
    props.cartupdate(productData);
  };
  return (
    <>
      <p style={{ textAlign: "left", margin: "1vw" }}>
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          Home
        </Link>{" "}
        &#62; Product
      </p>
      <div className="Product">
        {productData ? (
          <>
            <div className="productImgContainer">
              <img
                src={productData.image}
                alt={productData.title}
                className="ProductImg"
              />
            </div>
            <div className="contentContainer">
              <div>
                <h1 className="prodTitle">{productData.title}</h1>
              </div>
              <div className="productDescription">
                {productData.description}
              </div>
              <div className="prodCategory">
                <b>Category:</b>{" "}
                <Link to={"/Category?" + productData.category}>
                  <span> {productData.category}</span>
                </Link>
              </div>
              <div className="prodRating">
                <b>Reviews:</b> {productData.rating.rate} (
                {productData.rating.count})
              </div>
              <div>
                <div>
                  <button className="cartBtns" id="addCart" onClick={addtoCart}>
                    Add to cart
                  </button>
                  <button className="cartBtns" id="buyNow">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          "loading..."
        )}
      </div>
    </>
  );
};

export default Product;
