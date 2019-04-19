import React, { Component } from "react";
import "./Header1.css";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { login, register, logout } from './../../ducks/userReducer'
import axios from 'axios'

export class Header1 extends Component {

  logout = ()=>{
    axios.get('/auth/logout')
    .then(res=>{
        console.log(res);
        this.props.logout()
        alert('Logout successful')
        this.props.history.push('/');
    })
    .catch(err => console.log(`Something happened while logging out: ${err}`))
}

  render() {
    return (
      <div className="header-1">
        <div className="header-1-container">
          <div className="black-nav">
            <div>
              <Link to="/"><img src='https://cdn.shopify.com/s/files/1/1358/2295/files/Pinkbike-Corporate-Logo_RGB_200x.png?v=1499283796' alt='pink bike logo' height={32} /></Link>
            </div>
            <div>
              {this.props.user.isUserLoggedIn ? ( <div>Welcome, {this.props.user.username}!  <Link onClick={()=>{this.logout()}}>Logout</Link></div> ) : ( <Link to="/loginregister">Login/Register</Link>)}
            </div>
          </div>
          <div className="between" />
          <div className="navy-nav">
            <Link to="/loginregister"> Login/Register</Link>
            <Link to="/shop"> Shop</Link>
            <Link className='collections-link' to="/shop/collections"> Collections</Link>
            <Link className='mens-link' to="/shop/collections/mens"> Mens</Link>
            <Link className='womens-link' to="/shop/collections/womens"> Womens</Link>
            <Link className='footwear-link' to="/shop/collections/footwear"> Footwear</Link>
            <Link className='headwear-link' to="/shop/collections/headwear"> Headwear</Link>
            <Link className='misc-link' to="/shop/collections/misc"> Misc</Link>
            <Link to="/shop/collections/marketplace"> Marketplace</Link>
          </div>
          <div className="empty" />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (reduxState) => {
  return {
    user: reduxState.user
  }
}


export default connect(mapStateToProps, { login, register, logout })(Header1);
