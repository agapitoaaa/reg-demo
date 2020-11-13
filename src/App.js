import logo from './logo.svg';
import React, { Component } from 'react';
import Register from './component/register';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {

    return (
        <Register/>
    );
  }
}

export default App;
