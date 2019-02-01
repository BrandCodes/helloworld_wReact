import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import './button.js'
import {Button} from 'reactstrap';
import {withAlert} from 'react-alert';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header>
          <h3>
            Click the Button:
          </h3>
        </header>
        <Button outline color="primary"
          onClick={() => {
            alert('Hi World');
          }} >
          Click
        </Button>
      </div>
    );
  }
}

export default withAlert(App);
