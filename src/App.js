
import React, { Component } from 'react';
import Intro from './components/Intro';
import './app.styles.scss';

class App extends Component {
    render() {
        return (
            <div className="container">
              <Intro/>
            </div>
        );
    }
}

export default App;
