import React, { Component } from 'react'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import './NotFound.css'

export class NotFound extends Component {
  render() {
    return (
      <div>
        <Header2 />
        <div className='not-found'>
          <h1>404 NOT FOUND</h1>
        </div>
        <Footer2 />
      </div>
    )
  }
}

export default NotFound
