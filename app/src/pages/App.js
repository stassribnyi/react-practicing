import React from 'react';

import RouteWithSubRoutes from '../RouteWithSubRoutes'

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation />

                <div className="container top-buffer">
                    <div className="row">
                        <div className="col-lg-12">
                            {
                                this.props.routes.map((route) => (<RouteWithSubRoutes key={route.path} {...route} />))
                            }
                        </div>
                    </div>
                </div>

                <Footer />
            </div >
        );
    }
}