import React from 'react';
import './Body.css';

function Header() {
  return (
    <div className="Body">
      <body className="Body-display">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Body-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body>
    </div>
  );
}

export default Header;
