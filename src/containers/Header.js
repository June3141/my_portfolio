import React from 'react';
import logo from './Header_logo.svg';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <header className="Header-display">
        <img src={logo} className="Header-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Header;
