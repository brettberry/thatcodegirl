
import React, { Component } from 'react';
import LogoSVGOutline from '../components/LogoSVGOutline';
import './topNavigation.styles.scss';

class TopNavigation extends Component {
    render() {
        return (
            <div className="container">
              <LogoSVGOutline/>
            </div>
        );
    }
}

export default TopNavigation;
