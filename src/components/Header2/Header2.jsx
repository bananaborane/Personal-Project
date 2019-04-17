import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./Header2.css";

export class Header2 extends Component {
  render() {
    return (
      <div className="header-2">
        <div className="first-container">
          <div className="logo">
            <Link to="/">PINKBIKE LOGO</Link>
          </div>
          <div className="search-cart">SEARCH CART</div>
        </div>
        <div className="second-container">
          <div className="links">
            <Link to="/loginregister">Go to LoginRegister</Link>
            <Link to="/shop">Go to Shop</Link>
            <Link to="/shop/collections">Go to Collections</Link>
            <Link to="/shop/collections/mens">Go to Mens</Link>
            <Link to="/shop/collections/womens">Go to Womens</Link>
            <Link to="/shop/collections/footwear">Go to Footwear</Link>
            <Link to="/shop/collections/headwear">Go to Headwear</Link>
            <Link to="/shop/collections/misc">Go to Misc</Link>
            <Link to="/shop/collections/marketplace">Go to Marketplace</Link>
          </div>
          <div className="empty-offset" />
        </div>
      </div>
    );
  }
}

export default Header2;
