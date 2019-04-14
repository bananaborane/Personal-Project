import React, { Component } from 'react'
import './Header2.css'

export class Header2 extends Component {
  render() {
    return (
      <div className='header-2'>
        <div className='first-container'>
          <div className='logo'>PINKBIKE LOGO</div>
          <div className='search-cart'>SEARCH CART</div>
        </div>
        <div className='second-container'>
          <div className='links'>SHOP MEN WOMEN YOUTH HEADWEAR ACCESSORIES&GIFTS</div>
          <div className='empty-offset'></div>
        </div>
      </div>
    )
  }
}

export default Header2
