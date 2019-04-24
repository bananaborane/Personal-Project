import React, { Component } from 'react'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import { connect } from 'react-redux';
import EachBike from './../EachBike/EachBike'
import Bike from './../Bike/Bike'
import { login, register } from './../../ducks/userReducer';
import { displayCart, displayTheProduct } from './../../ducks/productsReducer';
import { displayBikes, addBike, removeBike } from './../../ducks/marketplaceReducer'

export class Marketplace extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
    this.props.displayBikes();
    
  }

  removeBike = () => {
    
  }

  render() {

    return (<div>
        <Header2 />

        Bikes for sale:  {this.props.marketplace.listOfBikes ? ( <div className='list-of-bikes'>
          {this.props.marketplace.listOfBikes.map((val, i)=>{
            return ( <Bike key={val.bike_id} bike_id={val.bike_id} user_id={val.user_id} username={val.username} city={val.city} unitedState={val.state} title={val.title} description={val.description} make={val.make} model={val.model} bike_type={val.bike_type} bike_size={val.bike_size} wheel_size={val.wheel_size} image_url={val.image_url} /> )
          })}
        </div> ) : ( <div><h2>This place is exclusive. Please sign in/login to continue.</h2></div> )}
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <Footer2 />
      </div>
    )
  }
}

let mapStateToProps = (reduxState) => {
  return {
    user: reduxState.user,
    products: reduxState.products,
    marketplace: reduxState.marketplace
  }
}

export default connect(mapStateToProps, { login, register, displayBikes, addBike, removeBike })(Marketplace)
