import React from 'react';
import logo from '../homer simpson.gif';
import './header.css';

const Header = props => (
    <div className="navbar navbar-default">
        <header className="App-header">
          <img className="logo" src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SIMPSONS CLICKY GAME</h1>
        </header>
      </div>
);

export default Header;