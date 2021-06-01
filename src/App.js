import React, { Component } from 'react';
import './App.css';
import Dashboard from './pages/dashboard/dashboard.page.jsx';

class App extends Component{
  render() {
    return (
        <div className="App">
          <Dashboard />
        </div>

    );
  }
}

export default App;
