import React, { Component } from 'react';

import './App.css';

import { Footer, RouteWithSubRoutes, Navigation } from '../../components';

export default class App extends Component {
  componentWillMount() {
    this.props.history.push('/current');
  }

  render() {
    return (
      <div className="App">
        <Navigation />

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {this.props.routes.map(route => (
                <RouteWithSubRoutes key={route.path} {...route} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
