import React, { Component } from 'react'
import './EachBike.css'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import { connect } from 'react-redux';
import { reduxHandleChange } from './../../ducks/userReducer'

export class EachBike extends Component {

  componentDidMount(){
    console.log(this.props.match.params)
  }

  render() {
    console.log(this.props.match.params)
    return (
      <div>
        <Header2/>
          From EachBike.jsx
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
  EachBike
  )