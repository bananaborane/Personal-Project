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
import './Shop.css'
import Carousel from './../Carousel/Carousel'

export class Shop extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      slides: [
        {
          url:
            "https://cdn.shopify.com/s/files/1/1358/2295/files/2018-Pinkbike-Shop-Apparel-Banner_cc66e59a-de22-4b6c-9020-5a406c06fb99_2048x.jpg?v=1546630450",
            link:'/shop/collections/mens',
            title: 'Shop Mens Collection'
        },
        {
          url:
            "https://cdn.shopify.com/s/files/1/1358/2295/files/2019-Pinkbike-Shop-Bike-Swag-Banner-3_2048x.jpg?v=1552932393",
            link: '/shop/collections/misc',
            title: 'Pimp out your bike'
        },
        { url: "https://cdn.shopify.com/s/files/1/1358/2295/files/2019-Pinkbike-Shop-Headwear-Banner-2_2048x.jpg?v=1552932030",
          link: '/shop/collections/headwear',
          title: 'Pinkbike Headwear'
     }
      ]
    };
  }

  componentDidMount() {
    setInterval(() => this.slide(), 4750);    
  }

  slide = () => {
    let { slides, index } = this.state;
    if (index !== slides.length - 1) {
      this.setState({ index: index + 1 });
    } else if (index === slides.length - 1) {
      this.setState({ index: 0 });
    }
  };

  next = () => {

    this.slide();
  };

  previous = () => {

    let { index, slides } = this.state;
    if (index !== 0) {
      this.setState({ index: index - 1 });
    } else if (index === 0) {
      this.setState({ index: slides.length - 1 });
    }
  };


  render() {
    let slide = this.state.slides.map((slide, index) => {
      if (index === this.state.index) {
        return (
          <div key={index} to={slide.link} className='carousel' onClick={()=>{this.next()}} style={{ backgroundImage: `url(${slide.url})`, width: `100%`, height: `800px` }}>
            <div>
              <button className="w3-button previous-button" onClick={e=>{ e.stopPropagation(); this.previous()}}>
                &lt;
              </button>
              <Link to={slide.link} className='carousel-link'>
                {slide.title}
              </Link>
              <button className="w3-button next-button" onClick={e=>{ e.stopPropagation(); this.next()}}>
                  >
              </button>
            </div>
          </div>)
      }
    });
    return (
      <div className='shop'>
        <Header2 />



  
      {/* <div className='slide-method'>
        {slide}
      </div> */}
      <Carousel />

        <div className="shop-links-section">
          <div className="links-from-shop">
            <Link className='below-slide-links' to="/shop/collections/mens">
              <h3>
                Go to Mens
              </h3>
              <img src='https://cdn.shopify.com/s/files/1/1358/2295/products/Next_Level_6210_-_Pinkbike_ARCH_-_Black_Front_1024x1024.png?v=1541543784' alt='mens' />
            </Link>
            <Link className='below-slide-links' to="/shop/collections/womens">
              <h3>
                Go to Womens
              </h3>
              <img src='https://cdn.shopify.com/s/files/1/1358/2295/products/Next_Level_Womens_Ideal_Crew_1510_-_Pinkbike_ARCH_-_Black_Front_1024x1024.png?v=1541544214' alt='womens' />
            </Link>
            <Link className='below-slide-links' to="/shop/collections/headwear">
              <h3>
                Go to Headwear
              </h3>
              <img src='https://cdn.shopify.com/s/files/1/1358/2295/products/Captuer-Pinkbike-Square-5-Panel-Hat-Front_1024x1024.jpg?v=1544642643' alt='womens' />
            </Link>
            <Link className='below-slide-links' to="/shop/collections/misc">
              <h3>
                Go to Misc
              </h3>
              <img src='https://cdn.shopify.com/s/files/1/1358/2295/products/pb-plus-tbn_large_3614352a-f3e9-4a22-bfc9-c2c3f8223ce4_1024x1024.jpg?v=1499287279' alt='yeti bike' />
            </Link>
            <Link className='below-slide-links last-shop-link' to="/shop/collections/marketplace">
              <h3>
                Go to Marketplace
              </h3>
              <img src='https://tredz.azureedge.net/prodimg/115009_1_Zoom.jpg' />
            </Link>
          </div>
        </div>
        <Footer2 />


      </div>
    );
  }
}

export default Shop;
