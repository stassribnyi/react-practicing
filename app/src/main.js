import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Bootstrap from './vendor/bootstrap-without-jquery';

import RouteWithSubRoutes from './RouteWithSubRoutes';

import App from './pages/App';
import Archives from './pages/Archives';
import Featured from './pages/Featured';
import Settings from './pages/Settings';

const routes = [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/archives',
                component: Archives
            },
            {
                path: '/featured',
                component: Featured
            },
            {
                path: '/settings',
                component: Settings
            }
        ]
    }
];

ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li><Link to="/archives">Archives</Link></li>
                <li><Link to="/featured">Featured</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
            {
                routes.map((route) => (
                    <RouteWithSubRoutes key={route.path} {...route} />
                ))
            }
        </div>
    </Router>,
    document.getElementById('app')
);