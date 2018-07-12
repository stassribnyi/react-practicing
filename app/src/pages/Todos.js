import React from 'react';

import Todo from '../components/Todo';

export default class Todos extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            todos: [
                {
                    id: 1531413197,
                    text: 'Learn flux',
                    complete: false
                },
                {
                    id: 1531413283,
                    text: 'Practice React',
                    complete: false
                }
            ]
        };
    }

    render() {
        const { todos } = this.state;

        const TodoComponents = todos.map((todo) => (<Todo key={todo.id} {...todo} />));

        return (
            <div>
                <h1>Todos</h1>
                <ul>
                    {TodoComponents}
                </ul>
            </div>
        );
    }
}