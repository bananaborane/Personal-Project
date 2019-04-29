import React, { Component } from 'react'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import axios from 'axios'
import { connect } from 'react-redux';
import { login, register, reduxHandleChange } from './../../ducks/userReducer'
import './LoginRegister.css'
import socketIOClient from 'socket.io-client'
import io from 'socket.io-client'
require('dotenv').config();
const { SERVER_PORT, REACT_APP_BASE } = process.env;

export class LoginRegister extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginRegisterFlag: true,
      endpoint: REACT_APP_BASE
    }
    this.socket = io(this.state.endpoint)
  }

  handleToggle = ()=>{
    this.setState({
      loginRegisterFlag: !this.state.loginRegisterFlag
    })
  }

  handleChange = (e)=>{
    this.props.reduxHandleChange(e)
  }

  register = ()=>{
    axios.post('/auth/register', this.props.user)
    .then((res)=>{
      alert(res.data.message)
      this.props.user.isUserLoggedIn = true;
      this.props.history.push('/profile')})
      this.socket.emit('ENTER', { id: this.props.user.id } )
    .catch(err=>console.log(`Something happened while registering: ${err}`))
  }

  login = ()=>{ 
    this.props.login(this.props.user.email, this.props.user.password)
    .then(()=>{
      alert('Login Successful')
      this.props.history.push('/profile')
      this.socket.emit('ENTER', { id: this.props.user.id })})
    .catch(err=>console.log(`Something happened while logging in: ${err}`))
  }

  loginKeyUp(e){
    e.preventDefault();
    if (e.keyCode === 13 && e.target.value){
      this.login();
    }
  }

  registerKeyUp(e){
    e.preventDefault();
    if (e.keyCode === 13 && e.target.value){
      this.register();
    }
  }


  render() {
    return (
      <div>
        <Header2 />
        <div className='loginregister-section'>
          <div className='loginregister'>
            {this.state.loginRegisterFlag ? ( <div className='login-container'>
              <div className='login'>
                <h3>Login</h3>
                <input name='email' onChange={(e)=>{this.handleChange(e)}}  placeholder='Enter email here'></input>
                <input onKeyUp={(e)=>{this.loginKeyUp(e)}} className='last-loginregister-input' type='password' name='password' onChange={(e)=>{this.handleChange(e)}}  placeholder='Enter password here'></input>
                <button onClick={()=>{this.login()}}>Login</button>
              </div>
            </div> ) : ( <div className='register-container'>
              <div className='register' >
                <h3>Register</h3>
                <input name='email' onChange={(e)=>{this.handleChange(e)}}  placeholder='Enter email here'></input>
                <input type='password' name='password' onChange={(e)=>{this.handleChange(e)}}    placeholder='Enter password here'></input>
                <input className='last-loginregister-input' name='username' onChange={(e)=>{this.handleChange(e)}} onKeyUp={(e)=>{this.registerKeyUp(e)}}  placeholder='Enter username here'></input>
                <button onClick={()=>{this.register()}}>Register</button>
              </div>
            </div> )}
            <button onClick={()=>{this.handleToggle()}} >{this.state.loginRegisterFlag ? (<p>Don't have an account?</p>) : (<p>Need to Login instead?</p>)}</button>
          </div>
        </div>
        <Footer2 />
      </div>
    )
  }
}

function mapStateToProps(reduxState){
  return {
    user: reduxState.user
  }
}

export default connect(mapStateToProps, { login, register, reduxHandleChange })(LoginRegister)
