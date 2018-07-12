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
                                <NavLink to="/todos" activeClassName="active-menu" onClick={this.toggleCollapse}>Todos</NavLink >
                            </li>
                            <li>
                                <NavLink to="/favorites" activeClassName="active-menu" onClick={this.toggleCollapse}>Favorites</NavLink >
                            </li>
                            <li>
                                <NavLink to="/settings" activeClassName="active-menu" onClick={this.toggleCollapse}>Settings</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}