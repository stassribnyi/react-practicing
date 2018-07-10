import React from 'react';

import Title from './Title/Title';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;
        this.props.changeTitle(value);
    }

    render() {
        return (
            <div>
                <Title title={this.props.title} />
                <input
                    type="text"
                    value={this.props.title}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}