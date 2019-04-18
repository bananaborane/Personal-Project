import React, { Component } from 'react'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import axios from 'axios'
import { connect } from 'react-redux'
import { login, register, logout, reduxHandleChange } from './../../ducks/userReducer'


export class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: '',
            state: '',

        }
    }



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


    render() {
    return (
      <div>
        <Header2/>
        {this.props.user.isUserLoggedIn ? ( 
        <div>
          <h3>Welcome back {this.props.user.username}</h3>
          <input onChange={(e)=>{this.handleChange(e)}} name='city' placeholder='Enter your city here' value={this.state.city}></input>
          <input onChange={(e)=>{this.handleChange(e)}} name='state' placeholder='Enter your state here' value={this.state.state}></input>
        
          <button onClick={()=>{this.addLocation()}}>Update Location</button>
          <br></br>
          <button onClick={()=>{this.logout()}}>Logout</button>
        </div> ) : ( <h2>Wrong way buddy</h2> )}

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
