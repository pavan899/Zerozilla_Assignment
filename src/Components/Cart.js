import React from "react";
import "./Styles/Cart.css";
import { Link } from "react-router-dom";

const Cart = (props) => {
  return (
    <div>
      <p style={{ textAlign: "left", margin: "1vw 0 0 1vw" }}>
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          Home
        </Link>{" "}
        &#62; Cart
      </p>
      <h1>Cart</h1>

      {props.cartValue.map((item) => (
        <div className="cartItem">
          <div className="cartImageContainer">
            <img src={item.image} alt="" className="cartItemImage" />
          </div>
          <div className="cartProductData">
            <h3>{item.title}</h3>
            <div>$ {item.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
