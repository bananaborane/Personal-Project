import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Header1 from "./../Header1/Header1";
import Footer1 from "./../Footer1/Footer1";
import routes from "./../../routes";
import "./Main.css";

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header1 />
        <div className='main-2'>
          <div className="inside-main">
            <br />
            <div className="main-container">
              <div className='left-column'>
                <div className='red-container-1'>
                  <div className='inside-red-container-1'></div>
                </div>
                <div className='red-container-2'>
                  <div className='inside-red-container-2'></div>
                </div>
                <div className='red-container-3'>
                  <div className='inside-red-container-3'></div>
                </div>
              </div>
              <div className='red-container-4'>
                <div className='inside-red-container-4'></div>
              </div>
              <div className='red-container-5'>
                <div className='inside-red-container-5'></div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 />
      </div>
    );
  }
}

export default Main;
