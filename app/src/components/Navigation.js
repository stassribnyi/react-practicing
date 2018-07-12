import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink to="/featured" activeClassName="active-menu">Featured</NavLink >
                            </li>
                            <li>
                                <NavLink to="/archives" activeClassName="active-menu">Archives</NavLink >
                            </li>
                            <li>
                                <NavLink to="/settings" activeClassName="active-menu">Settings</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}