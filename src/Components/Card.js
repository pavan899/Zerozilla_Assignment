import React from "react";
import "./Styles/Card.css";

const Card = (props) => {
  return (
    <>
      <div className="productImageContainer">
        <img src={props.data.image} className="productImage" alt="" />
      </div>
      <div className="productTitleContainer">
        <h4 className="productTitle">{props.data.title}</h4>
      </div>
      <div className="categoryContainer">
        <div className="productCategory">
          <b>Category:</b> {props.data.category}
        </div>
      </div>
      <div className="productPriceContainer">
        <div className="productPrice">$ {props.data.price}</div>
      </div>
    </>
  );
};

export default Card;
