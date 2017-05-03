
import React, { Component } from 'react';
import Home from './pages/Home';
import './app.styles.scss';

class App extends Component {
    render() {
        return (
            <div className="container">
              <Home/>
            </div>
        );
    }
}

export default App;
