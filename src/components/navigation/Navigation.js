import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };

    this.closeMenu = this.closeMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  closeMenu() {
    this.setState({
      collapsed: true
    });
  }

  render() {
    const navClass = this.state.collapsed ? 'collapse' : '';

    const navUrls = [
      { label: 'Current', url: '/current' },
      { label: 'Favorite', url: '/favorite' },
      { label: 'Complete', url: '/complete' }
    ];

    const navLinks = navUrls.map(navLink => (
      <li>
        <NavLink
          to={navLink.url}
          activeClassName="active-menu"
          onClick={this.closeMenu}
        >
          {navLink.label}
        </NavLink>
      </li>
    ));

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              onClick={this.toggleMenu}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div className={`navbar-collapse ${navClass}`}>
            <ul className="nav navbar-nav">{navLinks}</ul>
          </div>
        </div>
      </nav>
    );
  }
}
