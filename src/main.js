import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import RouteWithSubRoutes from './RouteWithSubRoutes';

import { App, Todos, Favorites, Settings } from './pages';

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

const root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <div>
      {routes.map(route => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </div>
  </Router>,
  root
);
