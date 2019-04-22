import React, { Component } from 'react'
import './EachBike.css'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import { connect } from 'react-redux';
import { reduxHandleChange } from './../../ducks/userReducer'
import { displayTheBike } from './../../ducks/marketplaceReducer'
import { Link, Switch, Route } from 'react-router-dom'

export class EachBike extends Component {

  componentDidMount() {
    let { params } = this.props.match;
    this.props.displayTheBike(params.id);
    console.log(params);
  }

  render() {
    // console.log(this.props.match.params)
    let { user_id, bike_id, title, description, image_url, city, state, username, make, model, bike_size, bike_type, wheel_size  } = this.props.marketplace.theBike;
    let isItTrue = this.props.user.id === this.props.marketplace.theBike.user_id;
    return (
      <div>
        <Header2/>
          From EachBike.jsx
          <div className='each-bike'>
            <img src={image_url} alt={title} className='each-bike-img' />
            <div className='bike-right-column'>
              <div>
                {title}
              </div>
              <div>
                Make: {make}
              </div>
              <div>
                Model: {model}
              </div>
              <div>
                Bike_Size: {bike_size}
              </div>
              <div>
                Bike Type: {bike_type}
              </div>
              <div>
                Wheel size: {wheel_size}
              </div>
              <div>
                User: {username}
              </div>
              <div>
                location: {city}, {state}
              </div>
              <div>
                {description} 
              </div>
              { isItTrue ? (null) : (<button>Inquire</button>)}
            </div>
          </div>
        <Footer2/>
      </div>
    )
  }
}



let mapStateToProps = (reduxState)=>{
  return {
    user: reduxState.user,
    marketplace: reduxState.marketplace
  }
}

export default connect(mapStateToProps, { reduxHandleChange, displayTheBike })(
  EachBike
  )