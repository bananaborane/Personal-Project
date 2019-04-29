import React, { Component } from 'react'
import './Checkout2.css'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import { Link, Switch, Route } from 'react-router-dom'
import { login, register, logout, reduxHandleChange } from './../../ducks/userReducer'
import { connect } from 'react-redux'
import { displayTheProduct } from './../../ducks/productsReducer'

export class Checkout2 extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        this.waitAMinute()
    }

    waitAMinute (){
        setTimeout(function(){
            this.props.history.push('/')
        }, 5000)
    }

  render() {
      console.log('from checkout2')

    return (
      <div className='checkout2'>
        <Header2/>
                    <iframe className='airhorn' title='airhorn' width="500px" height="300px" id="player" allow="autoplay" src="https://www.youtube.com/embed/UaUa_0qPPgc?autoplay=1&cc_load_policy=1"></iframe>
  
        <Footer2/>
      </div>
    )
  }
}

let mapStateToProps = (reduxState)=>{
    return {
      user: reduxState.user,
      products: reduxState.products
    }
  }

export default connect(mapStateToProps, { displayTheProduct, login, register })(Checkout2)
