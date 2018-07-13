import React from 'react';

export default class Todo extends React.Component {
    render() {
        const { text, onDelete } = this.props;
        const crossStyle = {
            cursor: 'pointer'
        };

        return (
            <li>
                {text}
                <span onClick={onDelete} style={crossStyle}>&nbsp;&#x2715;</span>
            </li>
        );
    }
}