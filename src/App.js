import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'material-ui/Button'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">You spin me right round baby right round like a record baby right round round round</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Button</Button>
      </div>
    );
  }
}

export default App;
