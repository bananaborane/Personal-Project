import React, { Component } from 'react'
import './DisplayCart.css'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import { connect } from 'react-redux';
import { reduxHandleChange } from './../../ducks/userReducer'
import { displayTheProduct, displayCart, updateTotalPrice } from './../../ducks/productsReducer'
import EachCartItem from './../EachCartItem/EachCartItem'
import { Link, Switch, Route } from 'react-router-dom'

export class DisplayCart extends Component {
  constructor(props){
    super(props);
    this.state = {
      theCart: [],
      totalPrice: 0
    }
  }

  sendToCheckout = ()=>{
    if (this.props.products.theCart[0]){
      this.props.history.push('/shop/collections/checkout')
    } else {
      alert('No Products to checkout!')
    }
  }

  componentDidMount(){
    let { displayCart, user } = this.props;
    displayCart(user.id, user.cartId)
    .then(()=>{
      console.log('hi')
    })
    .catch(err=>console.log(`Something happened while displaying cart on the front end: ${err}`))
  }

  componentDidUpdate(prevProps){
    if(this.props.products.totalPrice !== prevProps.products.totalPrice){
      console.log('line 39', prevProps)
      this.props.updateTotalPrice();
    }
  }

  render() {
    console.log('line 45', this.props.products.totalPrice)
    return (
      <div>
        <Header2 />
          <div className='display-cart'>



              Your cart items:  
            <div className='the-list-from-cart'>
              {this.props.products.theCart ? ( <div className='cart-items'>{ this.props.products.theCart.map((val, i)=>{return ( <EachCartItem key={val.product_id} id={val.product_id} price={val.price} title={val.title} description={val.description} image_url={val.image_url} type={val.type} qty={val.qty} size={val.size} /> ) })  }</div> ) : ( <div><h2>No products to display from cart!</h2></div> )}
            </div>

            {/* {console.log('line 55', this.props.products)} */}

            <div className='cart-total-price'>
              Total price: {this.props.products.theCart ? (this.props.products.totalPrice) : (<span> 0 </span>) }
            </div>

            <h4>SPECIAL INSTRUCTIONS FOR SELLER:</h4>
            <input className='instructions-text' type='text' />

              <button onClick={()=>{this.sendToCheckout()}}>CHECK OUT</button>

          </div>
        <Footer2 />
      </div>
    )
  }
}

let mapStateToProps = (reduxState) => {
  return {
    products: reduxState.products,
    user: reduxState.user
  }
}

export default connect(mapStateToProps, { reduxHandleChange, displayTheProduct, displayCart, updateTotalPrice })(DisplayCart)
