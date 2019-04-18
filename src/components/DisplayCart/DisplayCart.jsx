import React, { Component } from 'react'
import './DisplayCart.css'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import { connect } from 'react-redux';
import { reduxHandleChange } from './../../ducks/userReducer'
import { displayTheProduct, displayCart } from './../../ducks/productsReducer'

export class DisplayCart extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  componentDidMount(){
    let { displayCart, user } = this.props;
    displayCart(user.id, user.cartId);

  }

  render() {
    let mappedCartItems = this.props.products.theCart.map((val, i)=>{return ( <div>
      <div>{val.title}</div>
      <div><img src={val.image_url} alt={val.title} width={200}/></div>
      <div>{val.price}</div>
    </div> ) })
    return (
      <div>
        <Header2 />
            From DisplayCart.jsx
            Your cart items:  {this.props.products.theCart[0] ? ( <div className='cart-items'>{ mappedCartItems }</div> ) : ( <div><h2>No products to display from cart!</h2></div> )}
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
