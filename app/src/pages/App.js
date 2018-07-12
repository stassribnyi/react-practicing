import React from 'react';

import RouteWithSubRoutes from '../RouteWithSubRoutes'

import Header from '../components/Header';
import Footer from '../components/Footer';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            title: 'Welcome!'
        };
    }

    changeTitle(title) {
        this.setState({ title });
    }

    render() {
        return (
            <div>
                <Header
                    title={this.state.title}
                    changeTitle={(title) => this.changeTitle(title)}
                />
                {
                    this.props.routes.map((route) => (<RouteWithSubRoutes key={route.path} {...route} />))
                }
                <Footer />
            </div>
        );
    }
}