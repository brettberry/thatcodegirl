
import React, { Component } from 'react';
import Home from './pages/Home';
import RouteProvider from './RouteProvider';
import './app.styles.scss';

class App extends Component {
    render() {
        return (
            <div className="container">
              <RouteProvider/>
            </div>
        );
    }
}

export default App;
