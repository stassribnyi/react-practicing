import React from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            title: 'Welcome!'
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            title: 'Welcome, Stas'
        })
            , 5000);
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <Footer />
            </div>
        );
    }
}