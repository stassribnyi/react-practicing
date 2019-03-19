import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { RouteWithSubRoutes } from './components';

import { App, Current, Favorite, Complete } from './pages';

const routes = [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/current',
        component: Current
      },
      {
        path: '/favorite',
        component: Favorite
      },
      {
        path: '/complete',
        component: Complete
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
