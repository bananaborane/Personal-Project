import React, { Component } from "react";
import "./Header1.css";
import { Link, Route, Switch } from "react-router-dom";

export class Header1 extends Component {
  render() {
    return (
      <div className="header-1">
        <div className="header-1-container">
          <div className="black-nav">
            <div>
              <Link to="/">PINKBIKE LOGO</Link>
            </div>
            <div>
              <Link to="/loginregister">Go to LoginRegister</Link>
            </div>
          </div>
          <div className="between" />
          <div className="navy-nav">
            <Link to="/loginregister">Go to LoginRegister</Link>
            <Link to="/shop">Go to Shop</Link>
            <Link to="/shop/collections">Go to Collections</Link>
            <Link to="/shop/collections/mens">Go to Mens</Link>
            <Link to="/shop/collections/womens">Go to Womens</Link>
            <Link to="/shop/collections/footwear">Go to Footwear</Link>
            <Link to="/shop/collections/headwear">Go to Headwear</Link>
            <Link to="/shop/collections/accessories">Go to Accessories</Link>
            <Link to="/shop/collections/marketplace">Go to Marketplace</Link>
          </div>
          <div className="empty" />
        </div>
      </div>
    );
  }
}

export default Header1;
