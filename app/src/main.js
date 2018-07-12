import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from "react-router-dom";

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
                path: '/featured',
                component: Featured
            },
            {
                path: '/archives',
                component: Archives
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
            {
                routes.map((route) => (
                    <RouteWithSubRoutes key={route.path} {...route} />
                ))
            }
        </div>
    </Router>,
    document.getElementById('app')
);