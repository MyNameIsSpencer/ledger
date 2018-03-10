import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'material-ui/Button';
import ic from 'insult-compliment';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      text: ''
    }
  }

  componentWillMount() {
    let newText = ic.Insult();
    this.setState({text: newText})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">You spin me right round baby right round like a record baby right round round round</h1>
        </header>
        <p className="App-intro">
          {this.state.text}
        </p>
        <Button>Button</Button>
      </div>
    );
  }
}

export default App;
