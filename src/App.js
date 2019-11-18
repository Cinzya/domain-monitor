import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import List from './components/list';

class App extends Component{
  render() {
    return (
        <div className="App">
              <List />
              <Navigation />
        </div>

    );
  }
}

export default App;
