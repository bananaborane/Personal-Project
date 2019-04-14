import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Header1 from "./../Header1/Header1";
import Footer1 from "./../Footer1/Footer1";
import routes from "./../../routes";
import "./Main.css";

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="inside-main">
          <Header1 />
          <Link to="/loginregister">Go to LoginRegister</Link>
          <Link to="/shop">Go to Shop</Link>
          <Link to="/shop/collections">Go to Collections</Link>
          <Link to="/shop/collections/mens">Go to Mens</Link>
          <Link to="/shop/collections/womens">Go to Womens</Link>
          <Link to="/shop/collections/headwear">Go to Headwear</Link>
          <Link to="/shop/collections/accessories">Go to Accessories</Link>
          <Link to="/shop/collections/marketplace">Go to Marketplace</Link>
          <br />
          <a href="https://www.pinkbike.com/">Go to the OG Site</a>
          <div className='main-container'>
            From Main.jsx
          </div>
          <Footer1 />
        </div>
      </div>
    );
  }
}

export default Main;
