import React, { Component } from 'react'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import axios from 'axios'
import './Checkout.css'
import { login, register, logout, reduxHandleChange } from './../../ducks/userReducer'
import { connect } from 'react-redux'
import { displayTheProduct } from './../../ducks/productsReducer'
import { Link, Switch, Route } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';

let airhorn = new Audio(`C:\Users\Louie\devmountain\week_seven\PersonalProject\personalproject\src\components\Checkout\dj-airhorn-sound-effect-kingbeatz_1.mp3`);
airhorn.src = `C:\Users\Louie\devmountain\week_seven\PersonalProject\personalproject\src\components\Checkout\dj-airhorn-sound-effect-kingbeatz_1.mp3`;

export class Checkout extends Component {
  constructor(props){
    super(props)
    this.state={

    }
    
  }

  onToken = (token, addresses)=>{
    axios.post(`/stripecharge`, { 
      totalPrice: this.props.products.totalPrice || 5,
      stripeEmail: token.email, 
      stripeToken: token.id, 
      stripeTokenType: token.type,
      stripeBillingName: addresses.billing_name || '',
      stripeBillingAddress1: addresses.billing_address_line1 || '',
      stripeBillingAddressZip: addresses.billing_address_zip || '',
      stripeBillingAddressState: addresses.billing_address_state || '',
      stripeBillingAddressCity: addresses.billing_address_city || '',
      stripeBillingAddressCountry: addresses.billing_address_country || ''
    }).then(()=>{
      axios.put('/checkout', {})
        .then(()=>{
          console.log(`checkout endpoint hit`)
          alert(`STRIPE CHECKOUT SUCCESSFUL BABY`)
          this.props.history.push('/')
        })
        .catch(err=>console.log(`Something wrong happened while checking out, ${err}`))
    
    }).catch(err=>{console.log(`Something happened with stripe checkout: ${err}`)})  
  }

  // submitOrder = (e)=>{
  //   e.preventDefault();
  //   airhorn.play().then(()=>{console.log('woo')}).catch(err=>console.log(err))
  //   axios.put('/checkout', {})
  //     .then((res)=>{
  //       alert(res.data.message);
  //       this.props.history.push('/')
  //     })
  //     .catch(err=>console.log(`Something wrong happened while checking out, ${err}`))
  // }

  render() {
    return (
      <div>
        <Header2/>
          <div className='checkout'>
            {/* From Checkout.jsx 
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
            </form> */}

            <StripeCheckout 
                      amount={this.props.products.totalPrice*100}
                      billingAddress
                      description="Awesome Stuff"
                      image="https://stripe.com/img/documentation/checkout/marketplace.png"
                      locale="auto"
                      name="Pinkbike"
                      stripeKey="pk_test_aGJXwidpX3VZ7Yd0xtUDVtq800eIftn5G1"
                      token={this.onToken}
                      zipCode
                      label='Cough it up baby'
                      panelLabel='Pay the piper'
            />
 


                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
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
