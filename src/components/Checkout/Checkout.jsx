import React, { Component } from 'react'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import axios from 'axios'
import './Checkout.css'
import { login, register, logout, reduxHandleChange } from './../../ducks/userReducer'
import { connect } from 'react-redux'
import { displayTheProduct } from './../../ducks/productsReducer'
import { Link, Switch, Route } from 'react-router-dom'

export class Checkout extends Component {
  constructor(props){
    super(props)
    this.state={}
  }

  submitOrder = (e)=>{
    e.preventDefault();
    axios.post('/checkout', {})
      .then((res)=>{
        alert(res.data.message);
        this.props.history.push('/')
      })
      .catch(err=>console.log(`Something wrong happened while checking out, ${err}`))
  }

  render() {
    return (
      <div>
        <Header2/>
          <div className='checkout'>
            From Checkout.jsx 
            <form className='checkout-form'>
              <input placeholder='Email' />
              <input placeholder='First Name' /> 
              <input placeholder='Last Name' /> 
              <input placeholder='Address' /> 
              <input placeholder='Apartment, suite, etc.' /> 
              <input placeholder='City' /> 
              <input placeholder='Country/Region' /> 
              <input placeholder='State' /> 
              <input placeholder='ZIP Code' /> 
              <input placeholder='Phone' /> 
              <div className='buttons'>
                <Link to='/shop/displaycart'>
                  <button>Return to cart</button>
                </Link>
                <input type='button' value='submit order' onClick={(e)=>{this.submitOrder(e)}} />
              </div>
            </form>
          </div>  
        <Footer2/>
      </div>
    )
  }
}

let mapStateToProps = (reduxState)=>{
  return {
    user: reduxState.user,
    products: reduxState.products
  }
}


export default connect(mapStateToProps, { displayTheProduct, login, register })(Checkout)
