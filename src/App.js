
import React, { Component } from 'react';
import TopNavigation from './components/TopNavigation';
import './app.styles.scss';

class App extends Component {
    render() {
        return (
            <div className="container">
              <TopNavigation/>
            </div>
        );
    }
}

export default App;
