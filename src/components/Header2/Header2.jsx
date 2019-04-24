import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./Header2.css";
import axios from 'axios'
import { connect } from 'react-redux';
import { login, register, logout } from './../../ducks/userReducer'
import { withRouter } from 'react-router-dom'



export class Header2 extends Component {

  logout = ()=>{
    axios.get('/auth/logout')
    .then(res=>{
        console.log(res);
        this.props.logout()
        this.props.history.push('/');
        alert('Logout successful')
    })
    .catch(err => console.log(`Something happened while logging out: ${err}`))
}

  render() {
    return (
      <div className="header-2">
        <div className='the-containers'>
          <div className="first-container">
            <div className="logo">
              <Link to="/"><img src='https://cdn.shopify.com/s/files/1/1358/2295/files/Pinkbike-Corporate-Logo_RGB_200x.png?v=1499283796' alt='pink bike logo' /></Link>
            </div>
            <div className='right-side'>
            {this.props.user.isUserLoggedIn ? (
              <div className="search-cart">
              <Link className='username' to='/profile'>
               | {this.props.user.username} |
              </Link>
              <Link className='logout-link' onClick={()=>{this.logout()}} to='/'>Logout</Link>
              <span className='search'>SEARCH</span>
            <Link className='cart-link' to='/shop/displaycart'>
              CART
            </Link>
          </div>
            ) : (
              <div className='search-cart'>
                <Link className='loginregister-link' to='/loginregister'>Login/Register</Link>
                <div className="search-cart">
                  <span className='search'>SEARCH</span>
                </div>  
              </div>
            )}
            </div>
          </div>

          <div className="second-container">
            <div className="links">
              {/* <Link to="/loginregister">Go to LoginRegister</Link> */}
              <Link className='each-link' to="/shop">Shop</Link>
              <Link className='each-link' to="/shop/collections">Collections</Link>
              <Link className='each-link' to="/shop/collections/mens">Mens</Link>
              <Link className='each-link' to="/shop/collections/womens">Womens</Link>
              <Link className='each-link' to="/shop/collections/footwear">Footwear</Link>
              <Link className='each-link' to="/shop/collections/headwear">Headwear</Link>
              <Link className='each-link' to="/shop/collections/misc">Misc</Link>
              <Link className='each-link' to="/shop/collections/marketplace">Marketplace</Link>
            </div>
            <div className="empty-offset"></div>
          </div>
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

export default withRouter(connect(mapStateToProps, { login, register, logout })(Header2));
