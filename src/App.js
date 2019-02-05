import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './button.js'
import MButton from './button.js';
//import {Button} from 'reactstrap';
//import {withAlert} from 'react-alert';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header>
          <h3>
            Click the Button:
          </h3>
        </header>
        <MButton />
      </div>
    );
  }
}

export default App;
