import React, {Component} from 'react';
import './App.css';
import Header from './containers/Header';

const NotFound = () => {
  return(
    <h2> ページが見つかりません． </h2>
  )
}

class App extends Component{
  render() {
    return (
      <div className="App">
      <Header />
      </div>
    );
  }
}

export default App;
