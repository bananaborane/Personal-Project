import React, { Component } from 'react'
import './Product.css'
import { Link, Switch, Route } from 'react-router-dom'

export class Product extends Component {
  render() {
      let { key, id, image_url, title, price, type  } = this.props;
    return (
      <Link className='each-product-link' to={{
        pathname:`/shop/collections/${type}/${id}`
      }}>
        <div className='each-product-title-desc'>
          <img src={image_url} alt={title} width={190} />
          <b>{title}</b>
          <p>${price} USD</p>
        </div>
      </Link>
    )
  }
}

export default Product
