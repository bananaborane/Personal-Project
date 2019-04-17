import React, { Component } from 'react'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import './Mens.css'
import axios from 'axios';
import Product from './../Product/Product'
import { connect } from 'react-redux'
import { requestProducts } from './../../ducks/productsReducer' 
import { Link, Switch, Route } from 'react-router-dom'

export class Mens extends Component {



  componentDidMount = ()=>{
    this.props.requestProducts('mens')
  }


  render() {
    console.log(this.props.products)
    let mappedMensProducts = this.props.products.listOfProducts.map((val, i)=>{return ( 
    <Product className='each-product' type={val.type} key={val.product_id} id={val.product_id} image_url={val.image_url} title={val.title} price={val.price} />
    

 )})
    return (
      <div>
        <Header2 />
        From Mens.jsx
        <div className='list-of-products-container'>
          <div className='list-of-products'>
            {mappedMensProducts}
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

export default connect(mapStateToProps, { requestProducts })(Mens)
