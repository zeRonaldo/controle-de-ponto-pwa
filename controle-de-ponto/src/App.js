import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom'
import './App.css';

import Home from './Home'
import Historico from './Estatistica'
import Login from  './Login'
import Estatistica from './Estatistica'


class App extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
            <Home />
          )}/>

        <Route exact path="/history" render={() => (
            <Historico />
          )}/>

        <Route exact path="/stats" render={ () => (
            <Estatistica />
          )}/>
         <Route exact path="/login" render={ () => (
            <Login />
          )}/>
      </div>
        

    );
  }
}


export default App;
