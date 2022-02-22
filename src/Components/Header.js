import React from "react";
import "./Styles/Header.css";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Header = (props) => {
  const searchChanged = (e) => {
    props.updateSearch(e.currentTarget.value);
  };
  return (
    <header>
      <div className="LogoContainer">
        <Link to="" style={{ textDecoration: "none" }}>
          Zerozilla Assignment
        </Link>
      </div>
      <div className="SearchBoxContainer">
        <input
          name="searchBox"
          className="searchBox"
          type="text"
          onChange={searchChanged}
          placeholder="Search Products.."
        />
      </div>
      <div className="MenuContainer">
        <span className="cartIcon">
          <span className="cartCount">
            {props.cartCount.filter((v, i, a) => a.indexOf(v) === i).length}
          </span>
          <Link to="/Cart" style={{ textDecoration: "none" }}>
            <FaShoppingCart />
          </Link>
        </span>
        <span className="profileIcon">
          <Link to="/Profile" style={{ textDecoration: "none" }}>
            <FaUserCircle />
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
