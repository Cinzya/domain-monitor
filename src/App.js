import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import List from './components/list';
import Intro from './components/intro';


class App extends Component{
  
  render() {
    return (
        <div className="App">
            <main>
                <section>
                    <Intro />
                    
                    <List />
                </section>
            </main>
            <Navigation />
        </div>

    );
  }
}

export default App;
