import React, { Component } from "react";
import "./EachCartItem.css";
import Header2 from "./../Header2/Header2";
import Footer2 from "./../Footer2/Footer2";
import { connect } from "react-redux";
import { reduxHandleChange } from "./../../ducks/userReducer";
import { displayTheProduct, addToCart, updateTotalPrice, decrementQty, incrementQty, removeFromCart } from "./../../ducks/productsReducer";
import axios from 'axios';

export class EachCartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: this.props.qty
    };
  }

  increment = async ()=>{
    if(this.state.qty < 10){

      this.setState({
        qty: this.state.qty + 1
      })
      this.props.incrementQty(this.props.id, this.props.size, 1)
      this.props.updateTotalPrice();
    }
  }

  decrement = async ()=>{
    console.log(this.state.qty)
    if(this.state.qty >= 1){
      console.log('line 32, from decrement')
      this.setState({
        qty: this.state.qty - 1
      })
      this.props.decrementQty(this.props.id, this.props.size, 1)
      this.props.updateTotalPrice();
    }
  }

  handleSelectChange = (e)=>{
    this.setState({
      size: e.target.value
    })
  }

  componentDidMount() {
    this.props.updateTotalPrice();
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
    } = this.props; // desctructuring from DisplayCart props

    return (
      <div>

        <div className="each-product" style={{ width: 300 }}>
          <img src={image_url} alt={title} width={220} />
          {title}
          {size}
          {this.state.qty} x {price} = {this.state.qty*price} 
          {type}
          {this.state.qty}

          <div className="qty-container">
            <button onClick={() => {this.decrement()}}>
              -
            </button>
            <div>
              <h4>Quantity: {this.state.qty}</h4>
            </div>
            <button onClick={() => {this.increment()}}>
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
  { reduxHandleChange, displayTheProduct, addToCart, updateTotalPrice, incrementQty, decrementQty, removeFromCart }
)(EachCartItem);




// increment = async () => {
//   if (this.state.qty < 10) {

//     await this.props.incrementQty(this.props.id, this.props.size, 1);
//     axios.post('/collections/product/retrieveqty', { id: this.props.id, size: this.props.size })
//         .then((res)=>{
//           console.log(res.data.payload[0])
//           this.setState({
//             qty: res.data.payload[0] || this.state.qty + 1
//           })
//         })
//         .catch(err=>console.log(`Something happened: ${err}`))


//     // axios.post('/collections/addtocart', { id: this.props.id, size: this.props.size, qty: 1 })
//     // .then((res)=>{
//     //   console.log(res.data)
//     //   let ourProduct = res.data.payload.find((val, i)=>{
//     //     return val.product_id === this.props.id
//     //   })
//     //   console.log(res.data.payload2[0].sum)
//     //   let totalPrice = res.data.payload2[0].sum
//     //   this.props.updateTotalPrice(totalPrice);
//     //   this.setState({
//     //     qty: ourProduct.qty
//     //   })
//     // })
//     // .catch(err=>console.log(`Something happened while incrementing qty for product in cart: ${err}`))
//   }
// };

// decrement = async () => {
//   if (this.state.qty >= 1) {

//     await this.props.decrementQty(this.props.id, this.props.size, 1);
//     axios.post('/collections/product/retrieveqty', { id: this.props.id, size: this.props.size })
//           .then((res)=>{
//             console.log(res.data.payload[0])
//             this.setState({
//               qty: res.data.payload[0] || this.state.qty - 1
//             })
//           })
//           .catch(err=>console.log(`Something happened: ${err}`))


//     // axios.post('/collections/decrementqty', { id: this.props.id, size: this.props.size, qty: 1 })
//     // .then((res)=>{
//     //   console.log(res.data)
//     //   let ourProduct = res.data.payload.find((val, i)=>{
//     //     return val.product_id === this.props.id
//     //   })

//     //   console.log(res.data.payload2)
//     //   let totalPrice = res.data.payload2[0].sum || 0;
//     //   this.props.updateTotalPrice(totalPrice);

//     //   this.setState({
//     //     qty: ourProduct.qty
//     //   })
//     // })
//     // .catch(err=>console.log(`Something happened while decrementing qty for product in cart on front end: ${err}`))

//     // this.props.decrementQty()

//     // this.setState({
//     //   qty: this.state.qty - 1 || 0
//     // });

//   }

// };




