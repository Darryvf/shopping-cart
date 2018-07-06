import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CartHeader from './header'
import CartFooter from './footer'
import CartItems from './items'

class App extends Component {
  render() {
    return (
      <div>
        < CartHeader />
        < CartItems />
        < CartFooter />
      </div>
    );
  }
}

export default App;
