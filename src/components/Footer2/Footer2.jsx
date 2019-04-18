import React, { Component } from 'react'
import './Footer2.css'

export class Footer2 extends Component {
  render() {
    return (
      <div className='footer-2'>
        <div className='first-box'>
          <div className='first'>
            <div className='follow-us'>Follow Us</div>
            <div className='social-media-icons'> FB TW IG YT</div>
          </div>
          <div className='second'>
            <h3>QUESTIONS?</h3>
            <h5>FOR ANY STORE INQUIRIES PLEASE CONTACT SHOP@PINKBIKE.COM</h5>
          </div>
        </div>
        <div className='second-box'>
          <div className='copyright'>PINKBIKE COPYRIGHT</div>
          <div className='payment-icons'>AMEX VISA MASTERCARD PAYPAL</div>
        </div>
      </div>
    )
  }
}

export default Footer2
