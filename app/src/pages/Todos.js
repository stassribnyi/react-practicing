import React from 'react';

import Todo from '../components/Todo';

import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

export default class Todos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: TodoStore.getAll(),
            newTodo: ''
        };

        this.createTodo = this.createTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        TodoStore.on('change', () => {
            this.setState({
                todos: TodoStore.getAll()
            });
        });
    }

    createTodo() {
        if (this.state.newTodo) {
            TodoActions.createTodo(this.state.newTodo);
        }
    }

    deleteTodo(id) {
        TodoActions.deleteTodo(id);
    }

    handleChange(event) {
        const text = event.target.value;

        this.setState({
            newTodo: text
        });
    }

    render() {
        const { todos } = this.state;

        const TodoComponents = todos.map((todo) => (
            <Todo key={todo.id} {...todo} onDelete={() => this.deleteTodo(todo.id)} />
        ));

        return (
            <div>
                <h1>Todos</h1>
                <input value={this.state.newTodo} onChange={this.handleChange} />
                <button onClick={this.createTodo}>Create ToDo</button>
                <ul>
                    {TodoComponents}
                </ul>
            </div>
        );
    }
}