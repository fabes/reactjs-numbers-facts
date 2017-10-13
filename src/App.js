import React, { Component } from 'react';
import NumberInput from './components/NumberInput.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NumberInput/>
      </div>
    );
  }
}

export default App;
