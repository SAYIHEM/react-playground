import React, { Component } from 'react';
import './App.css';
import './buttons/ArrowButton'
import {ArrowButton} from "./buttons/ArrowButton";

class App extends Component {
  render() {
    return (
        <div className="Background">
          <header className="Header">
            <ArrowButton/>
          </header>
        </div>
    );
  }
}

export default App;
