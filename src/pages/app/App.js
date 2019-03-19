import React, { Component } from 'react';

import './App.css';

import { LoaderStore as store } from '../../stores';

import {
  RouteWithSubRoutes,
  Navigation,
  Footer,
  Loader
} from '../../components';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaderVisible: false
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({
      isLoaderVisible: store.getState()
    });
  }

  render() {
    return (
      <div className="App">
        <Loader visible={this.state.isLoaderVisible} />
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

  componentWillMount() {
    store.on('change', this.updateState);

    this.props.history.push('/current');
  }

  componentWillUnmount() {
    store.removeListener('change', this.updateState);
  }
}
