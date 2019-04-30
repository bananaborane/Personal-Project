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
            <div className='pinkbike-logo-link'>
              <Link to="/">
                <span className='pb-logo'>PB</span>
                <span className='pinkbike-logo'>Pinkybike</span>
              </Link>
            </div>
            <div>
              {this.props.user.isUserLoggedIn ? ( <div>Welcome, <Link to='/profile'>{this.props.user.username}!</Link>  <Link onClick={()=>{this.logout()}}>Logout</Link></div> ) : ( <Link to="/loginregister">Login/Register</Link>)}
            </div>
          </div>
          <div className="between" />
          <div className="navy-nav">
            <div className='profile-or-login-register'>{this.props.user.isUserLoggedIn ? (<Link to='/profile'>Profile</Link>) : (<Link to="/loginregister"> Login/Register</Link>)}</div>
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
