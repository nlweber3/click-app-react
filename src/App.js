import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import logo from './homer simpson.gif'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SIMPSONS CLICKY GAME</h1>
        </header>
        <p className="App-intro">

        <p> testing </p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
