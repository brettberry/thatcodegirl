
import React, { Component } from 'react';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';

import LogoSVG from '../components/LogoSVG';
import './home.styles.scss';

class Home extends Component {
    render() {
        return (
            <div className="intro">
              <LogoSVG className="loadingAnimation"/>
              <FaAngleDoubleDown className="more"/>
              <div className="section"></div>
            </div>
        );
    }
}

export default Home;
