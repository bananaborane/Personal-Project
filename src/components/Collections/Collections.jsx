import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Header2 from "./../Header2/Header2";
import Footer2 from "./../Footer2/Footer2";
import "./Collections.css";

export class Collections extends Component {
  render() {
    return (
      <div className="collections">
        <Header2 />

        <div className="collections-section">
          <div className="row-one">
            <Link className='each-collections-link' to="/shop/collections/mens">
            <h3>
              Men's
            </h3>
            <p>View All</p>
            <img src='https://cdn.shopify.com/s/files/1/1358/2295/products/Next_Level_6210_-_pinkbike_-_Midnight_Navy_Front_2_copy_1024x1024.jpg?v=1538586191' alt='mens from collections' />
            </Link>
            <Link className='each-collections-link' to="/shop/collections/womens">
              <h3>
                Women's
              </h3>
              <p>View All</p>
              <img src='https://cdn.shopify.com/s/files/1/1358/2295/products/Next_Level_6610_-_Pinkbike_Lightning_-_Black_Front_1024x1024.png?v=1541547579' alt='womens from collections' />
            </Link>
            <Link className='each-collections-link' to="/shop/collections/headwear">
              <h3>
                  Women's
                </h3>
                <p>View All</p>
                <img src='https://cdn.shopify.com/s/files/1/1358/2295/products/Captuer-Pinkbike-Square-5-Panel-Hat-Front_1024x1024.jpg?v=1544642643' alt='headwear from collections' />
            </Link>
          </div>
          <div className="row-two">
            <Link className='each-collections-link' to="/shop/collections/footwear">
                <h3>
                  Footwear
                </h3>
                <p>View All</p>
                <img src='https://cdn.shopify.com/s/files/1/1358/2295/products/Pinkbike-Compression-Black-Socks_large_d0817eba-b058-4ecb-8019-80e6d4b16a3c_1024x1024.jpg?v=1499289328' alt='footwear from collections' />
            </Link>
            <Link className='each-collections-link' to="/shop/collections/misc">
                <h3>
                  Misc
                </h3>
                <p>View All</p>
                <img src='https://cdn.shopify.com/s/files/1/1358/2295/products/1-calendar-min_1024x1024.jpg?v=15402302338' alt='misc from collections' />
            </Link>
            <Link className='each-collections-link last-collections-link' to="/shop/collections/marketplace">
                <h3>
                  Marketplace
                </h3>
                <p>View All</p>
                <img src='https://www.universalmountainbike.com/image/cache/data/Intense/Intense23-650x450.jpg' alt='marketplace from collections' />
            </Link>
          </div>
        </div>

        <Footer2 />
      </div>
    );
  }
}

export default Collections;
