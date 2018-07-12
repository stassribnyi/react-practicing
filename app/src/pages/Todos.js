import React from 'react';

import Todo from '../components/Todo';

import TodoStore from '../stores/TodoStore';

export default class Todos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: TodoStore.getAll()
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