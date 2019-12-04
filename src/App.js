import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import Content from './components/content';
import Intro from './components/intro';

class App extends Component{
  render() {
    return (
        <div className="App">
            <main>
                <section>
                    <Intro />
                    <Content />
                </section>
            </main>
            <Navigation />
        </div>

    );
  }
}

export default App;
