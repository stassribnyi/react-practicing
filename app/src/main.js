import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import RouteWithSubRoutes from './RouteWithSubRoutes';

import App from './pages/App';
import Todos from './pages/Todos';
import Favorites from './pages/Favorites';
import Settings from './pages/Settings';

const routes = [
    {
        path: '/',
        component: App,
        routes: [
            {
                exact: true,
                path: '/favorites',
                component: Favorites
            },
            {
                path: '/todos/:todo?',
                component: Todos
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