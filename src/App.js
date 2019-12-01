import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import List from './components/list';
import Intro from './components/intro';

import { connect } from 'react-redux';
import { handleChange } from './actions/domainInputActions';

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

const mapStateToProps = state => ({
  domainInput: state.domainInput.value
})

export default connect(mapStateToProps, { handleChange })(App);
