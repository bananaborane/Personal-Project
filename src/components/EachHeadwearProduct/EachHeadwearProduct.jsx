import React, { Component } from "react";
import "./EachHeadwearProduct.css";
import Header2 from "./../Header2/Header2";
import Footer2 from "./../Footer2/Footer2";
import { connect } from "react-redux";
import { reduxHandleChange } from "./../../ducks/userReducer";
import { displayTheProduct, addToCart } from "./../../ducks/productsReducer";

export class EachHeadwearProduct extends Component {
  constructor() {
    super();
    this.state = {
      qty: 1,
      size: "One Size Only"
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
    this.props.displayTheProduct("headwear", params.id);
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
          From EachHeadwearProduct.jsx
          <img src={image_url} alt={title} width={220} />
          {title}
          {description}
          {price}
          {type}
          <select onChange={(e)=>{this.handleSelectChange(e)}} >
            <option name="size" value="One Size Only">One Size Only</option>
 
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
)(EachHeadwearProduct);