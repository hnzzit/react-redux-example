import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'antd';
import {DatePicker} from 'antd'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <Button>hello</ Button>
        <DatePicker></DatePicker>
        </p>
      </div>
    );
  }
}

export default App;
