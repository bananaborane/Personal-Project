import React, { Component } from 'react'
import './DisplayCart.css'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import { connect } from 'react-redux';
import { reduxHandleChange } from './../../ducks/userReducer'
import { displayTheProduct, displayCart } from './../../ducks/productsReducer'
import EachCartItem from './../EachCartItem/EachCartItem'

export class DisplayCart extends Component {
  constructor(){
    super();
    this.state = {
      theCart: [],
      totalPrice: 0
    }
  }

  componentDidMount(){
    let { displayCart, user } = this.props;
    console.log(this.props)
    displayCart(user.id, user.cartId)
    .then(()=>{
      this.setState({
        theCart: this.props.products.theCart,
        totalPrice: this.props.products.totalPrice
      })
      console.log('hi')
    })
    .catch(err=>console.log(`Something happened while displaying cart on the front end: ${err}`))
  }

  render() {

    return (
      <div>
        <Header2 />
            From DisplayCart.jsx
            Your cart items:  {this.state.theCart ? ( <div className='cart-items'>{ this.state.theCart.map((val, i)=>{return ( <EachCartItem key={val.product_id} id={val.product_id} price={val.price} title={val.title} description={val.description} image_url={val.image_url} type={val.type} qty={val.qty} size={val.size} /> ) })  }</div> ) : ( <div><h2>No products to display from cart!</h2></div> )}
            Total price: {this.props.products.theCart ? (this.props.products.theCart.reduce((tot, curr)=>{ return tot+=curr.price*curr.qty }, 0)) : (<span> 0 </span>) }
            <h4>SPECIAL INSTRUCTIONS FOR SELLER</h4>
            <input type='text' />
            <button>CHECK OUT</button>
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

export default connect(mapStateToProps, { reduxHandleChange, displayTheProduct, displayCart })(DisplayCart)
