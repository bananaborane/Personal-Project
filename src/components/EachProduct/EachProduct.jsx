import React, { Component } from 'react'
import './EachProduct.css'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import { connect } from 'react-redux';
import { reduxHandleChange } from './../../ducks/userReducer'

export class EachProduct extends Component {

  componentDidMount(){

  }

  render() {
    return (
      <div>
        <Header2/>
          From EachProduct.jsx
        <Footer2/>
      </div>
    )
  }
}



let mapStateToProps = (reduxState)=>{
  return {
    user: reduxState.user
  }
}

export default connect(mapStateToProps, { reduxHandleChange })(
  EachProduct
  )
