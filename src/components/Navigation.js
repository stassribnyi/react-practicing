import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true
        };

        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const navClass = this.state.collapsed ? 'collapse' : '';

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" onClick={this.toggleCollapse}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className={`navbar-collapse ${navClass}`}>
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink to="/current" activeClassName="active-menu" onClick={this.toggleCollapse}>Current</NavLink >
                            </li>
                            <li>
                                <NavLink to="/favorite" activeClassName="active-menu" onClick={this.toggleCollapse}>Favorite</NavLink >
                            </li>
                            <li>
                                <NavLink to="/complete" activeClassName="active-menu" onClick={this.toggleCollapse}>Complete</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}