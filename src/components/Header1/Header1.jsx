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
              <Link to="/">PINKBIKE LOGO</Link>
            </div>
            <div>
              {this.props.user.isUserLoggedIn ? ( <div>Welcome, {this.props.user.username}!  <Link onClick={()=>{this.logout()}}>Logout</Link></div> ) : ( <Link to="/loginregister">Login/Register</Link>)}
            </div>
          </div>
          <div className="between" />
          <div className="navy-nav">
            <Link to="/loginregister">Go to LoginRegister</Link>
            <Link to="/shop">Go to Shop</Link>
            <Link to="/shop/collections">Go to Collections</Link>
            <Link to="/shop/collections/mens">Go to Mens</Link>
            <Link to="/shop/collections/womens">Go to Womens</Link>
            <Link to="/shop/collections/footwear">Go to Footwear</Link>
            <Link to="/shop/collections/headwear">Go to Headwear</Link>
            <Link to="/shop/collections/misc">Go to Misc</Link>
            <Link to="/shop/collections/marketplace">Go to Marketplace</Link>
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
