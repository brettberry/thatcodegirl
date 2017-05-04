import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './hamburgerMenu.styles.scss';

class HamburgerMenu extends Component {

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
      </div>
    );
  }
}

export default HamburgerMenu;
