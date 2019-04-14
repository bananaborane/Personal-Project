import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Link, Route, HashRouter } from 'react-router-dom'
import Header1 from './components/Header1/Header1'
import Footer1 from './components/Footer1/Footer1'
import Main from './components/Main/Main'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <HashRouter>
        
        {routes}

      </HashRouter>
    );
  }
}

export default App;
