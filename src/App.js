import React, { Component } from 'react';
import StopWatch from './StopWatch'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <StopWatch />
      </div>
    );
  }
}

export default App;
