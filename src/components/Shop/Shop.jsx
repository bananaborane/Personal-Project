import React, { Component } from "react";
import { Link, Route, Switch, HashRouter } from "react-router-dom";
import Header2 from "./../Header2/Header2";
import Footer2 from "./../Footer2/Footer2";
import Mens from './../Mens/Mens'
import Womens from './../Womens/Womens'
import Headwear from './../Headwear/Headwear'
import Misc from './../Misc/Misc'
import Marketplace from './../Marketplace/Marketplace'
import Header1 from './../Header1/Header1'
import Collections from './../Collections/Collections'
import NotFound from './../NotFound/NotFound'

export class Shop extends Component {
  render() {
    return (
      <div>
        <Header2 />
        From Shop.jsx
        <Link to="/shop/collections">Go to Collections</Link>
        <Link to="/shop/collections/mens">Go to Mens</Link>
        <Link to="/shop/collections/womens">Go to Womens</Link>
        <Link to="/shop/collections/headwear">Go to Headwear</Link>
        <Link to="/shop/collections/misc">Go to Misc</Link>
        <Link to="/shop/collections/marketplace">Go to Marketplace</Link>

        <Footer2 />


      </div>
    );
  }
}

export default Shop;
