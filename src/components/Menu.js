import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import LogoSVG from '../components/LogoSVG';
import FaGithub from 'react-icons/lib/fa/github';
import FaInstagram from 'react-icons/lib/fa/instagram';
import './menu.styles.scss';

class Menu extends Component {

  state = {
    isActive: false
  }

  static propTypes = {
    className: PropTypes.string
  }

  render() {
    return (
      <div className={this.props.className}
           onClick={() => this.setState({ isActive: !this.state.isActive })}>
        <div className={classnames('line', this.state.isActive && 'showX')}/>
        <div className={classnames('line', this.state.isActive && 'showX')}/>
        <div className={classnames('line', this.state.isActive && 'showX')}/>
        <div className={classnames('rightPanel', this.state.isActive && 'showRightPanel')}>
          <h2 className="item">
            Beginner Guides
            <div className="underline"/>
          </h2>
          <h2 className="item">
            How To Code
            <div className="underline"/>
          </h2>
          <h2 className="item">
            Code & Travel
            <div className="underline"/>
          </h2>
          <h2 className="item">
            About That Girl
            <div className="underline"/>
          </h2>
          <FaGithub className="git"/>
          <FaInstagram className="insta"/>
        </div>
        <div className={classnames('leftPanel', this.state.isActive && 'showLeftPanel')}>
          <LogoSVG className="white"/>
        </div>
      </div>
    );
  }
}

export default Menu;
