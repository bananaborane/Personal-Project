import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Link, Route, HashRouter } from 'react-router-dom'
import Header1 from './components/Header1/Header1'
import Footer1 from './components/Footer1/Footer1'
import Main from './components/Main/Main'
import routes from './routes'
import axios from 'axios';
import { connect} from 'react-redux'
import { updateIsUserLoggedIn } from "./ducks/userReducer";

class App extends Component {

  componentWillMount(){
    axios.get(`/retrievesession`)
      .then((res)=>{
        if(res.data.id){
          this.props.updateIsUserLoggedIn(res.data)
        }
      })
      .catch(err=>console.log(`Something happened while checking for req.session ${err}`))
  }

  render() {
    return (
      <HashRouter>
        
        {routes}
        
      </HashRouter>
    );
  }
}

function mapStateToProps (reduxState){
  return {
    user: reduxState.user
  }
}

export default connect(mapStateToProps, { updateIsUserLoggedIn })(App);
