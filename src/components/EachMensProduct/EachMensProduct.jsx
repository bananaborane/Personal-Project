import React, { Component } from "react";
import "./EachMensProduct.css";
import Header2 from "./../Header2/Header2";
import Footer2 from "./../Footer2/Footer2";
import { connect } from "react-redux";
import { reduxHandleChange } from "./../../ducks/userReducer";
import { displayTheProduct, addToCart } from "./../../ducks/productsReducer";

export class EachMensProduct extends Component {
  constructor() {
    super();
    this.state = {
      qty: 1,
      size: "Small"
    };
  }

  increment = () => {
    if (this.state.qty < 10) {
      this.setState({
        qty: this.state.qty + 1
      });
    }
  };

  decrement = () => {
    if (this.state.qty > 1) {
      this.setState({
        qty: this.state.qty - 1
      });
    }
  };

  handleSelectChange = (e)=>{
    this.setState({
      size: e.target.value
    })
  }

  componentDidMount() {

    let { params } = this.props.match;
    this.props.displayTheProduct("mens", params.id);
    console.log(params);
  }

  addToCart = async () => {
    console.log(this.props.products)
    let { id } = this.props.match.params;
    let { size, qty } = this.state;
    await this.props.addToCart(id, qty, size);
    alert('Product has been added')
  };

  render() {
    console.log(this.state)
    let {
      title,
      description,
      image_url,
      price,
      type,
      product_id
    } = this.props.products.theProduct;
    return (
      <div>
        <Header2 />
        <div className="each-product" style={{ width: 300 }}>
          From EachMensProduct.jsx
          <img src={image_url} alt={title} width={220} />
          {title}
          {description}
          {price}
          {type}
          <select onChange={(e)=>{this.handleSelectChange(e)}} >
            <option name="size" value="Small">Small</option>
            <option name="size" value="Medium">Medium</option>
            <option name="size" value="Large">Large</option>
            <option name="size" value="XL">XL</option>
            <option name="size" value="Big Boi">Big Boi</option>
          </select>
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
          <button
            onClick={() => {
              this.addToCart();
            }}
          >
            ADD TO CART
          </button>
        </div>
        <Footer2 />
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
  { reduxHandleChange, displayTheProduct, addToCart }
)(EachMensProduct);
