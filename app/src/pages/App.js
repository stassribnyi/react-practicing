import React from 'react';
import Link from 'react-router-dom';


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
                {this.props.children}
                {/* <Link to="archives">Archives</Link> */}
                <Footer />
            </div>
        );
    }
}