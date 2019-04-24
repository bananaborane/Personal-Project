import React, { Component } from 'react'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import axios from 'axios'
import './Profile.css'
import { connect } from 'react-redux'
import { login, register, logout, reduxHandleChange } from './../../ducks/userReducer'
// import Chat from './../Chat/Chat'
import socketIOClient from 'socket.io-client'
import io from 'socket.io-client'


export class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: '',
            state: '',
            title: '',
            description: '',
            make: '',
            model: '',
            bike_size: '',
            bike_type: '',
            wheel_size: '',
            image_url: '',
            endpoint: 'http://localhost:4000',
            message: '',
            listOfMessages: []

        }
    this.socket = io(this.state.endpoint)
    this.socket.on('RECEIVE_MESSAGE', function(data){
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({listOfMessages: [...this.state.listOfMessages, data]});
      console.log(this.state.listOfMessages);
  };

    this.sendMessage = e => {
      e.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
          author: this.props.user.username,
          message: this.state.message
      })
      this.setState({message: ''});

  }

  this.handleEnter = e => {
    e.preventDefault();
    const body = e.target.value;
    if(e.keyCode === 13 && body){
      this.socket.emit('SEND_MESSAGE', {
        author: this.props.user.username,
        message: this.state.message
      })
      this.setState({message: ''})
    }

}
    }




    componentDidMount(){
      this.socket.on('SEND_MESSAGE', msg =>{
        this.setState({ listOfMessages: [msg, ...this.state.listOfMessages] })
      })
    }


    // socketioSubmitForm = (e)=>{
    //   e.preventDefault();
    //   const socket = socketIOClient(this.state.endpoint);
    //   socket.emit('chat message', document.getElementById('m').value);
    //   document.getElementById('m').value = '';
    //   socket.on('chat message', function(msg){
    //     let newMessage = document.createElement('LI');
    //     let text = document.createTextNode(msg);
    //     newMessage.appendChild(text)
    //     document.getElementById('messages').appendChild(newMessage);
    //   })
    //   return false;
    
    // }


    // send = ()=>{
    //   const socket = socketIOClient(this.state.endpoint)
    //   socket.emit('change color', this.state.color)
    // }

    // setColor = (color)=>{
    //   this.setState({
    //     color
    //   })
    // }

    // componentDidMount(){
    //   const socket = socketIOClient(this.state.endpoint)
    //   setInterval(this.send(), 1000);
    //   socket.on('change color', (col)=>{
    //     document.body.style.backgroundColor = col;
    //   })
    // }

    handleChange = (e)=>{
      let { name, value } = e.target;
      this.setState({
        [name]: value
      })
      console.log(this.state)
    }


    logout = ()=>{
      this.props.logout();
        axios.get('/auth/logout')
        .then(res=>{
            console.log(res);
            alert('Logout successful')
            this.props.history.push('/');
        })
        .catch(err => console.log(`Something happened while logging out: ${err}`))
    }

    addLocation = ()=>{
      axios.put('/auth/addlocation', this.state)
      .then(()=>{
        alert('Location was updated');
          this.setState({
            city: '',
            state: ''
          })
      })
      .catch(err=>console.log(`Something happened while adding location: ${err}`))
    }

    removeLocation = () => {
      axios.delete(`/auth/removelocation/${this.props.user.id}`)
      .then(()=>{
        alert('Current location was deleted');
        this.setState({
          city: '',
          state: ''
        })
      })
      .catch(err=>console.log(`Something happened while removing location: ${err}`))
    }

    addBikeToMarketplace = (e) => {
      e.preventDefault();
      axios.post('/addabiketomarketplace', {
        user_id: this.props.user.id,
        title: this.state.title || `${this.props.user.username}'s bike `,
        description: this.state.description || `This is my rad and rowdy bike, it is the best one out there.`,
        make: this.state.make || "Some company's",
        model: this.state.model || 'Shredster',
        bike_size: this.state.bike_size,
        bike_type: this.state.bike_type || 'two wheeled',
        wheel_size: this.state.wheel_size,
        image_url: this.state.image_url || 'https://cdn.shopify.com/s/files/1/0011/9069/0863/products/2019_YetiCycles_SB150_TS_Turq_X01_XMC_1e1fcdb9-b749-41ec-9286-78b13e6378e4.jpg?v=1534892461'
      })
        .then(()=>{
          alert('A bike was added on the marketplace');
          this.setState({
            title: '',
            description: '',
            make: '',
            model: '',
            bike_size: '',
            bike_type: '',
            wheel_size: '',
            image_url: ''
          })
        })
        .catch(err=>console.log(`Something happened while adding a bike into marketplace, ${err}`));
    }


    render() {
      const socket = socketIOClient(this.state.endpoint)

    return (
      <div>
        <Header2/>
        {this.props.user.isUserLoggedIn ? ( 
          <div className='profile-section'>
          <h3>Welcome there, {this.props.user.username}</h3>
          <div className='first-section'>
            <div className='change-location-section'>
              <input onChange={(e)=>{this.handleChange(e)}} name='city' placeholder='Enter your city here' value={this.state.city}></input>
              <input onChange={(e)=>{this.handleChange(e)}} name='state' placeholder='Enter your state here' value={this.state.state}></input>
            
              <button onClick={()=>{this.addLocation()}}>Update Location</button>
              <br></br>
              <button onClick={()=>{this.removeLocation()}}>Remove Location</button>
              <br></br>

            </div>
            <div className='login-button'>
              <button onClick={()=>{this.logout()}}>Logout</button>
            </div>
          </div>

          <br></br>
          <br></br>

          <div className='add-bike-form'>
            Add a bike for sale:
            <form onSubmit={(e)=>{this.addBikeToMarketplace(e)}}>
              <input value={this.state.title} name='title' placeholder='enter title here' onChange={(e)=>{this.handleChange(e)}} ></input>
              <input value={this.state.description} name='description' placeholder='enter description here' onChange={(e)=>{this.handleChange(e)}} ></input>
              <input value={this.state.make} name='make' placeholder='enter make here' onChange={(e)=>{this.handleChange(e)}} ></input>
              <input value={this.state.model} name='model' placeholder='enter model here' onChange={(e)=>{this.handleChange(e)}} ></input>
              <input required value={this.state.bike_size} name='bike_size' placeholder='enter bike_size here' onChange={(e)=>{this.handleChange(e)}} ></input>
              <input required value={this.state.bike_type} name='bike_type' placeholder='enter bike_type here' onChange={(e)=>{this.handleChange(e)}} ></input>
              <input value={this.state.wheel_size} name='wheel_size' placeholder='enter wheel_size here' onChange={(e)=>{this.handleChange(e)}} ></input>
              <input value={this.state.image_url} name='image_url' placeholder='enter image_url here' onChange={(e)=>{this.handleChange(e)}} ></input>
              <button >Add Bike to Marketplace</button>
            </form>
          </div>

          <br/>
          <br/>

          <div className='chat-section'>
            Marketplace Chat
            <div className="messages" id='messages'>
              {this.state.listOfMessages.map(message => {return (
                <div className='each-message'>{message.author}: {message.message}</div>)
              })}
            </div>
              <div className='send-message-section'>
                <input type="text" name='message' placeholder="Enter a message..." className="form-control" value={this.state.message} onChange={(e)=>{this.handleChange(e)}} onKeyUp={(e)=>{this.handleEnter(e)}} />
                <button onClick={(e)=>this.sendMessage(e)} className="btn btn-primary form-control">Send</button>
              </div>
            </div>


        </div> ) : ( <div className='wrong-way-buddy'><h2>Wrong way buddy</h2></div> )}

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


export default connect(mapStateToProps, { login, register, logout, reduxHandleChange })(Profile)
