import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../images/Amazon_logo.svg.png";
import searchIcon from "../icons/1080251-200.png";
import cartIcon from "../icons/shopping-cart.png";

function header() {
  return (
    <div className="header">
      <div className="logo-section">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-image" />
        </Link>
      </div>
      <div className="search-section ">
        <input type="text" className="searchInput" />
        <img src={searchIcon} alt="logo" className="search-icon" />
      </div>
      <div className="header-links">
        <Link to="/login" className="link">
          <div className="optionOne">Hello Guest</div>
          <div className="optiontwo">Sign in </div>
        </Link>
        <Link to="/orders" className="link">
          <div className="optionOne">Returns</div>
          <div className="optiontwo">&orders </div>
        </Link>
        <div className="prime link">
          <div className="optionOne">Your</div>
          <div className="optiontwo">Prime </div>
        </div>
        <div className="link cart-shopping">
          <img src={cartIcon} alt="cart" className="cart-image" />
          <span>5</span>
        </div>
      </div>
    </div>
  );
}

export default header;
