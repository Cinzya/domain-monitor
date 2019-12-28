import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import List from './components/list';
import Intro from './components/intro';
import logo from "./img/logo.svg";
import InputField from "./components/input-field";


class App extends Component{
  
  render() {
    return (
        <div className="App">
            <main>
                <section>
                    <Intro />

                    <div className="column-right">
                        <div className="logo">
                            <h1><span>Domain</span> <span>Monitor</span></h1>
                            <img src={logo}
                                 alt="Logo"/>
                        </div>

                        <InputField />
                    <List />
                    </div>
                </section>
            </main>
            <Navigation />
        </div>

    );
  }
}

export default App;
