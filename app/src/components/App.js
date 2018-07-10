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
                <Footer />
            </div>
        );
    }
}