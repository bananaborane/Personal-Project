import React, { Component } from 'react'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import axios from 'axios'
import { connect } from 'react-redux';
import { login, register, reduxHandleChange } from './../../ducks/userReducer'

export class LoginRegister extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginRegisterFlag: true
    }
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
    .then(()=>{
      alert('Register successful')
      this.props.user.isUserLoggedIn = true;
      this.props.history.push('/profile')})
    .catch(err=>console.log(`Something happened while registering: ${err}`))
  }

  login = ()=>{ 
    this.props.login(this.props.user.email, this.props.user.password)
    .then((res)=>{
      alert('Login successful')
      this.props.history.push('/profile')})
    .catch(err=>console.log(`Something happened while logging in: ${err}`))
  }


  render() {
    return (
      <div>
        <Header2 />
        From LoginRegister.jsx
        {this.state.loginRegisterFlag ? ( <div className='login-container'>
          <div className='login'>
            <input name='email' onChange={(e)=>{this.handleChange(e)}}  placeholder='Enter email here'></input>
            <input type='password' name='password' onChange={(e)=>{this.handleChange(e)}}  placeholder='Enter password here'></input>
            <button onClick={()=>{this.login()}}>Login</button>
          </div>
        </div> ) : ( <div className='register-container'>
        <input name='email' onChange={(e)=>{this.handleChange(e)}}  placeholder='Enter email here'></input>
            <input type='password' name='password' onChange={(e)=>{this.handleChange(e)}}  placeholder='Enter password here'></input>
            <input name='username' onChange={(e)=>{this.handleChange(e)}}  placeholder='Enter username here'></input>
            <button onClick={()=>{this.register()}}>Register</button>
        </div> )}
        <button onClick={()=>{this.handleToggle()}} >Toggle</button>
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
