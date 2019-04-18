import React, { Component } from "react";
import "./EachCartItem.css";
import Header2 from "./../Header2/Header2";
import Footer2 from "./../Footer2/Footer2";
import { connect } from "react-redux";
import { reduxHandleChange } from "./../../ducks/userReducer";
import { displayTheProduct, addToCart, updateTotalPrice, decrementQty, removeFromCart } from "./../../ducks/productsReducer";
import axios from 'axios';

export class EachCartItem extends Component {
  constructor() {
    super();
    this.state = {
      qty: 1
    };
  }

  increment = () => {
    if (this.state.qty < 10) {
      axios.post('/collections/addtocart', { id: this.props.id, size: this.props.size, qty: 1 })
      .then((res)=>{
        console.log(res.data)
        let ourProduct = res.data.payload.find((val, i)=>{
          return val.product_id === this.props.id
        })
        console.log(res.data.payload2)
        let totalPrice = res.data.payload2[0]
        this.props.updateTotalPrice(totalPrice);
        this.setState({
          qty: ourProduct.qty
        })
      })
      .catch(err=>console.log(`Something happened while incrementing qty for product in cart: ${err}`))
    }
  };

  decrement = () => {
    if (this.state.qty > 1) {
      this.props.decrementQty()
      this.setState({
        qty: this.state.qty - 1
      });

    }
    if (this.state.qty = 1){
      this.props.removeFromCart()
      this.setState({
        qty: 0
      })
    }
  };

  handleSelectChange = (e)=>{
    this.setState({
      size: e.target.value
    })
  }

  componentDidMount() {
    this.setState({
      qty: this.props.qty
    })
  }


  render() {
    console.log(this.state)
    let {
      title,
      description,
      image_url,
      price,
      type,
      id,
      qty,
      size
    } = this.props;
    return (
      <div>

        <div className="each-product" style={{ width: 300 }}>
          From EachCartItem.jsx
          <img src={image_url} alt={title} width={220} />
          {title}
          {this.state.qty} x {price} = {this.state.qty*price} 
          {type}
          {this.state.qty}

          <div className="qty-container">
            <button
              onClick={() => {
                this.decrement();
              }}
            >
              -
            </button>
            <div>
              <h4>Quantity: {this.state.qty}</h4>
            </div>
            <button
              onClick={() => {
                this.increment();
              }}
            >
              +
            </button>
          </div>

        </div>
      </div>
    );
  }
}

let mapStateToProps = reduxState => {
  return {
    user: reduxState.user,
    products: reduxState.products
  };
};

export default connect(
  mapStateToProps,
  { reduxHandleChange, displayTheProduct, addToCart, updateTotalPrice, decrementQty, removeFromCart }
)(EachCartItem);
