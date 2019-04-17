import React, { Component } from 'react'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import './Footwear.css'
import axios from 'axios';
import Product from './../Product/Product'
import { connect } from 'react-redux'
import { requestProducts } from './../../ducks/productsReducer' 

export class Footwear extends Component {



  componentDidMount = ()=>{
    this.props.requestProducts('footwear')
  }


  render() {
    console.log(this.props.products)
    let mappedFootwearProducts = this.props.products.listOfProducts.map((val, i)=>{return ( <Product className='each-product' key={val.product_id} id={val.product_id} image_url={val.image_url} title={val.title} price={val.price} />
 )})
    return (
      <div>
        <Header2 />
        From Footwear.jsx
        <div className='list-of-products-container'>
          <div className='list-of-products'>
            {mappedFootwearProducts}
          </div>
        </div>
        <Footer2 />   
      </div>
    )
  }
}


function mapStateToProps(reduxState){
  return {
    products: reduxState.products
  }
}

export default connect(mapStateToProps, { requestProducts })(Footwear)