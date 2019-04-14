import React, { Component } from 'react'
import './Header1.css'

export class Header1 extends Component {
  render() {
    return (
      <div className='header-1'>
        <div className='header-1-container'>
          <div className='black-nav'>
            <div>PINKBIKE LOGO</div>
            <div>Login/Register</div>
          </div>
          <div className='between'></div>
          <div className='navy-nav'>Login SHOP COLLECTIONS MENS WOMENS HEADWEAR ACCESSORIES</div>
          <div className='empty' ></div>
        </div>
      </div>
    )
  }
}

export default Header1
