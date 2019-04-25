import React, { Component } from "react";
import "./Bike.css";
import Header2 from "./../Header2/Header2";
import Footer2 from "./../Footer2/Footer2";
import { connect } from "react-redux";
import { reduxHandleChange } from "./../../ducks/userReducer";
import { Link, Switch, Route } from "react-router-dom";

export class Bike extends Component {
  componentDidMount() {
    // console.log(this.props.match.params)
  }

  removeBikeFromMarketplace = e => {
    e.stopPropagation();
    alert("hi");
  };

  render() {
    // console.log(this.props.match.params)
    let isItTrue = this.props.user.id === this.props.user_id;
    let {
      user_id,
      bike_id,
      title,
      description,
      image_url,
      bike_size,
      wheel_size,
      city,
      unitedState,
      username
    } = this.props;
    return (
      <Link
        to={{
          pathname: `/shop/collections/marketplace/${bike_id}`
        }}
      >
        <div className="each-bike">
          <img src={image_url} alt={title} className="each-bike-img" />
          <div className="bike-right-column">
            <div>{title}</div>
            <div>Bike Size: {bike_size}</div>
            <div>Wheel Size: {wheel_size}</div>
            <div>
              {city}, {unitedState}
            </div>
            <div>Seller: {username}</div>
            <div>{description}</div>
          </div>
        </div>
      </Link>
    );
  }
}

let mapStateToProps = reduxState => {
  return {
    user: reduxState.user
  };
};

export default connect(
  mapStateToProps,
  { reduxHandleChange }
)(Bike);
