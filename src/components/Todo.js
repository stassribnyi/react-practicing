import React from 'react';

export default class Todo extends React.Component {
    render() {
        const { text, onDelete } = this.props;
        const crossStyle = {
            cursor: 'pointer',
            backgroundColor: '#dd5600'
        };

        return (
            <li className="list-group-item">
                {text}
                &nbsp;
                <span className="badge" onClick={onDelete} style={crossStyle}>X</span>
            </li>
        );
    }
}