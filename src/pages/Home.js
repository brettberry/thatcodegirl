
import React, { Component } from 'react';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';
import Waypoint from 'react-waypoint';
import classnames from 'classnames';

import HamburgerMenu from '../components/HamburgerMenu';
import LogoSVG from '../components/LogoSVG';
import './home.styles.scss';

class Home extends Component {

  state = {
    showNavBar: false
  }

  render() {
    return (
      <div className="intro">
        <LogoSVG className="loadingAnimation"/>
        <FaAngleDoubleDown className="more"/>
        <Waypoint onLeave={() => this.setState({ showNavBar: true })}/>
        <div className={classnames('navBarContainer', this.state.showNavBar && 'showNavBar')}>
          <HamburgerMenu className="menu"/>
        </div>
        {/* <div className="rightPanel"/>
        <div className="leftPanel"/> */}
        <div className="testSection"/>
      </div>
    );
  }
}

export default Home;
