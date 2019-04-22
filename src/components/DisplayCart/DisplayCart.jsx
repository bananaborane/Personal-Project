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

  componentDidMount(){
    let { displayCart, user } = this.props;
    displayCart(user.id, user.cartId)
    .then(()=>{
      console.log('hi')
    })
    .catch(err=>console.log(`Something happened while displaying cart on the front end: ${err}`))
  }

  // componentDidUpdate(prevProps){
  //   if(this.props.products.totalPrice !== prevProps.products.totalPrice){
  //     console.log('line 31', prevProps)
  //     this.props.updateTotalPrice();
  //   }
  // }

  render() {
    console.log('line 29', this.props.products.totalPrice)
    return (
      <div>
        <Header2 />
            From DisplayCart.jsx

            Your cart items:  {this.props.products.theCart ? ( <div className='cart-items'>{ this.props.products.theCart.map((val, i)=>{return ( <EachCartItem key={val.product_id} id={val.product_id} price={val.price} title={val.title} description={val.description} image_url={val.image_url} type={val.type} qty={val.qty} size={val.size} /> ) })  }</div> ) : ( <div><h2>No products to display from cart!</h2></div> )}

            {console.log('line 37', this.props.products)}

            Total price: {this.props.products.theCart ? (this.props.products.totalPrice.sum || this.props.products.totalPrice) : (<span> 0 </span>) }

            <h4>SPECIAL INSTRUCTIONS FOR SELLER</h4>
            <input type='text' />
            <Link to='/shop/collections/checkout'>
              <button>CHECK OUT</button>
            </Link>
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
