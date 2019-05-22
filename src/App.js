import React, {Component} from 'react';
import './App.css';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import Footer from './containers/Footer/Footer';


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
      <Main />
      <Footer />
      </div>
    );
  }
}

export default App;
