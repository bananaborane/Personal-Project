import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import Mens from './../Mens/Mens'
import Womens from './../Womens/Womens'
import Headwear from './../Headwear/Headwear'
import Misc from './../Misc/Misc'
import Marketplace from './../Marketplace/Marketplace'
import Header1 from './../Header1/Header1'
import Collections from './../Collections/Collections'
import NotFound from './../NotFound/NotFound'
import {Link} from 'react-router-dom'


class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100 slide-img"
              src="https://cdn.shopify.com/s/files/1/1358/2295/files/2018-Pinkbike-Shop-Apparel-Banner_cc66e59a-de22-4b6c-9020-5a406c06fb99_2048x.jpg?v=1546630450"
              alt="First slide"
            />
            <Carousel.Caption>
                <Link to='/shop/collections/mens' className='carousel-link'>
                    <h3>SHOP OUR NEW COLLECTION</h3>
                </Link>
                <Link to='/shop/collections/mens' className='sub-title-link'>
                    <p>View mens products</p>
                </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slide-img"
              src="https://cdn.shopify.com/s/files/1/1358/2295/files/2019-Pinkbike-Shop-Bike-Swag-Banner-3_2048x.jpg?v=1552932393"
              alt="Third slide"
            />
  
            <Carousel.Caption>
            <Link to='/shop/collections/misc' className='carousel-link'>
                    <h3>PIMP OUT YOUR BIKE</h3>
                </Link>
                <Link to='/shop/collections/misc' className='sub-title-link'>
                    <p>Check out our bike accessories</p>
                </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slide-img"
              src="https://cdn.shopify.com/s/files/1/1358/2295/files/2019-Pinkbike-Shop-Headwear-Banner-2_2048x.jpg?v=1552932030"
              alt="Third slide"
            />
  
            <Carousel.Caption>
                <Link to='/shop/collections/headwear' className='carousel-link'>
                    <h3>PINKBIKE HEADWEAR</h3>
                </Link>
                <Link to='/shop/collections/headwear' className='sub-title-link'>
                    <p>View all Pinkbike Headwear</p>
                </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
export default ControlledCarousel