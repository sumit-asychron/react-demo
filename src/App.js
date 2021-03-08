import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Product from "./Product/Product";

class App extends Component {

  state = {
    "intro": "Hi Asychron",
    "footer": "Welcome"
  }

changeNameHandler = () => {
  this.setState({"intro": "Preenting Asy Team","footer": "Bye"});
}

  render(){
    return (
      <div className="App">
        <p>{this.state.intro}</p>
        <button onClick={this.changeNameHandler}>Change name</button>
        <Product name="Charger" price="100">This is awesome</Product>
        <Product name="Mobile" price="10000"></Product>
        <p>{this.state.footer}</p>
      </div>
    );
  }
}

export default App;
