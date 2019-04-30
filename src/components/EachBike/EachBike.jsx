import React, { Component } from 'react'
import './EachBike.css'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import { connect } from 'react-redux';
import { reduxHandleChange, inquireOnBike, updateListOfDirectMessages, holdRoomId } from './../../ducks/userReducer'
import { displayTheBike } from './../../ducks/marketplaceReducer'
import { Link, Switch, Route } from 'react-router-dom'
import socketIOClient from 'socket.io-client'
import io from 'socket.io-client'
import Axios from 'axios';
require('dotenv').config();
const { SERVER_PORT, REACT_APP_BASE } = process.env;

export class EachBike extends Component {
  constructor(props){
    super(props)
    this.state = {
      endpoint: REACT_APP_BASE,
      areTheyInquiring: false,
      listOfDirectMessages: [],
      directMessage: '',
    }
    this.socket = io(this.state.endpoint)
    this.socket.on('RECIEVE_DM', function(data){
      addDirectMessage(data)
    })

    const addDirectMessage = (data)=>{
      console.log(data);
      this.props.updateListOfDirectMessages(data)
    }

    this.sendDirectMessage = (e)=>{
      e.preventDefault();
      this.socket.emit('SEND_DM', {
        author: this.props.user.username,
        myId: this.props.user.id,
        theirId: this.props.marketplace.theBike.user_id,
        message: this.state.directMessage
      })
      this.setState({directMessage: ''})
    }

    this.handleDMEnter = e => {
      e.preventDefault();
      const body = e.target.value;
      if(e.keyCode === 13 && body){
        this.socket.emit('SEND_DM', {
          author: this.props.user.username,
          myId: this.props.user.id,
          theirId: this.props.marketplace.theBike.user_id,
          message: this.state.directMessage
        })
        this.setState({directMessage: ''})
      }
  
    }



  }

  componentDidMount() {
    let { params } = this.props.match;
    this.props.displayTheBike(params.id);
    console.log(params);
  }

  inquire = (e)=>{
    this.setState({
      areTheyInquiring: !this.state.areTheyInquiring
    })
    

    // let roomId = (Math.floor(Math.random()*100) + 1);
    // this.props.holdRoomId(roomId)
    // this.socket.emit('subscribe', {
    //   roomId,
    //   myId: this.props.user.id,
    //   theirId: this.props.marketplace.theBike.user_id
    // })
  }

  removeBikeFromMarketplace = ()=>{
    console.log('line 23')
    Axios.delete(`/removebikefrommarketplace/${this.props.match.params.id}`)
      .then(()=>{
        alert('Your bike has been deleted from marketplace')
        this.props.history.push('/shop/collections/marketplace')
      })
      .catch(err=>{console.log(`Something occurred while deleting bike from marketplace: ${err}`)})
  }

  handleChange = (e)=>{
    let { name, value } = e.target;
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }
  

  render() {
    // console.log(this.props.match.params)
    let { user_id, bike_id, title, description, image_url, city, state, username, make, model, bike_size, bike_type, wheel_size  } = this.props.marketplace.theBike;
    let isItTrue = this.props.user.id === this.props.marketplace.theBike.user_id;
    // let filteredDirectMessage = this.props.user.listOfDirectMessages.filter((val, i)=>{
    //   return val.myId ==
    // })
    return (
      <div>
        <Header2/>
            <div className='back-link'>
              <Link className='link-back-to-marketplace' to='/shop/collections/marketplace'>
                ← Back To Marketplace
              </Link>
            </div>
          
          <div className='each-individ-bike'>
            <img src={image_url} alt={title} className='each-bike-img' />

              <div className='each-bike-middle-section'>
                <div className='each-individ-bike-title'>
                  {title}
                </div>
                <div className='each-individ-bike-make'>
                  Make: {make}
                </div>
                <div className='each-individ-bike-model'>
                  Model: {model}
                </div>
                <div className='each-individ-bike-size'>
                  Bike Size: {bike_size}
                </div>
                <div className='each-individ-bike-type'>
                  Bike Type: {bike_type}
                </div>
                <div className='each-individ-bike-wheel-size'>
                  Wheel size: {wheel_size}
                </div>
                <div className='each-individ-bike-username'> 
                  User: {username}
                </div>
                <div className='each-individ-bike-location'>
                  location: {city}, {state}
                </div>

                Description:
                <div className='each-individ-bike-description'>
                  {description} 
                </div>
              </div>

              <div className='inquiring chat-is-on'>
              <div className='the-chat'>
              { isItTrue ? (<button onClick={()=>{this.removeBikeFromMarketplace()}}>Remove Bike from Marketplace</button>) : (
                // <Link to='/profile'>
                <button onClick={(e)=>{this.inquire(e)}}>{this.state.areTheyInquiring ? (<p>Cancel</p>) : (<p>Inquire</p>)}</button>
                // </Link>
                )}

              {this.state.areTheyInquiring ? (<div className='inquiry-chat-section'>
            Inquire to Seller
            <div className="messages" id='messages'>
              {this.props.user.listOfDirectMessages.map((message, i) => { if (message.myId === this.props.user.id || message.myId === this.props.marketplace.theBike.user_id){return (
                <div className='each-message'>{message.author}: {message.message}</div>)}
              })}
            </div>

              <div className='send-message-section'>
                <input type="text" name='directMessage' placeholder="Enter a message..." className="form-control" value={this.state.directMessage} onChange={(e)=>{this.handleChange(e)}} onKeyUp={(e)=>{this.handleDMEnter(e)}} />
                <button onClick={(e)=>this.sendDirectMessage(e)} className="btn btn-primary form-control">Send</button>
              </div>

            </div>) : (null)}
                </div>
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

export default connect(mapStateToProps, { reduxHandleChange, inquireOnBike, updateListOfDirectMessages, holdRoomId, displayTheBike })(
  EachBike
  )