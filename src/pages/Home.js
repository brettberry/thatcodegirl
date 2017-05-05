
import React, { Component } from 'react';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';
import Waypoint from 'react-waypoint';
import classnames from 'classnames';
import Instafeed from 'instafeed.js';

import Menu from '../components/Menu';
import LogoSVG from '../components/LogoSVG';
import './home.styles.scss';

class Home extends Component {

  state = {
    showNavBar: false
  }

  componentDidMount() {
    let userFeed = new Instafeed({
           get: 'user',
           userId: '5363964088',
           accessToken: '5363964088.e84be6d.692afbca4b494225a3e6aee1ef9ebba4',
           resolution: 'standard_resolution'
       });
       userFeed.run();
  }

  render() {
    return (
      <div className="intro">
        <LogoSVG className="loadingAnimation"/>
        <FaAngleDoubleDown className="more"/>
        <Waypoint onLeave={() => this.setState({ showNavBar: true })}/>
        <div className={classnames('navBarContainer', this.state.showNavBar && 'showNavBar')}>
          <Menu className="menu" onClick={() => this.setState({ showMenu: !this.state.showMenu })}/>
        </div>
        <div className="testSection" id="instafeed">
        </div>
      </div>
    );
  }
}

export default Home;
