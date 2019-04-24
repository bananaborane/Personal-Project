import React, { Component } from 'react'
import './Footer1.css'

export class Footer1 extends Component {
  render() {
    return (
      <div className='footer-1'>
        <div className='footer-1-container'>
         <div className='first-row'>
          <div className='about-us-section'>
            <h3>About Us</h3>
            <p>Contacts</p>
            <p>FAQ</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Sign Up!</p>
          </div>
          <div className='advertise-section'>
            <h3>Advertise</h3>
            <p>Advertising</p>
          </div>
          <div className='cool-features-section'>
            <h3>Cool Features</h3>
            <p>Submit a Story to Pink Bike</p>
            <p>Pinkbike Daily</p>
            <p>Friend Finder</p>
            <p>Users Online</p>
          </div>
          <div className='rss-section'>
            <h3>RSS</h3>
            <p>Pinkbike RSS Feed</p>
            <p>Pinkbike Twitter</p>
            <p>Pinkbike Facebook</p>
            <p>Pinkbike Youtube</p>
          </div>
         </div>
         <div className='second-row'>
           <div className='copyright-section'>
           Copyright © 2000 - 2019. Pinkbike.com. All rights reserved. 
            dv65 0.046974
          </div>
         </div>
         <div className='third-row'>
           <div className='mobile-version-section'>
            Mobile Version of Website
           </div>
         </div>
        </div>
      </div>
    )
  }
}

export default Footer1
