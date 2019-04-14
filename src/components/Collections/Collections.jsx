import React, { Component } from "react";
import { Link, Switch, Route } from 'react-router-dom'
import Header2 from "./../Header2/Header2";
import Footer2 from "./../Footer2/Footer2";

export class Collections extends Component {
  render() {
    return (
      <div>
        <Header2/>
        From Collections.jsx
        <Link to="/shop/collections/mens">Go to Mens</Link>
        <Link to="/shop/collections/womens">Go to Womens</Link>
        <Link to="/shop/collections/headwear">Go to Headwear</Link>
        <Link to="/shop/collections/accessories">Go to Accessories</Link>
        <Link to="/shop/collections/marketplace">Go to Marketplace</Link>
        <Footer2/>
      </div>
    );
  }
}

export default Collections;
