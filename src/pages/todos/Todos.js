import React, { Component } from 'react';

import './Todos.css';

import Todo from '../../components/Todo';

import * as TodoActions from '../../actions/TodoActions';
import TodoStore from '../../stores/TodoStore';

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: TodoStore.getAll(),
      disabled: true,
      newTodo: ''
    };

    this.getTodos = this.getTodos.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    TodoActions.fetchTodos();
    TodoStore.on('change', this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener('change', this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  createTodo() {
    if (!this.state.disabled) {
      TodoActions.createTodo(this.state.newTodo);

      this.setState({
        newTodo: '',
        disabled: true
      });
    }
  }

  deleteTodo(id) {
    TodoActions.deleteTodo(id);
  }

  handleChange(event) {
    const text = event.target.value;

    this.setState({
      newTodo: text,
      disabled: text.length === 0
    });
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map(todo => (
      <Todo key={todo.id} {...todo} onDelete={() => this.deleteTodo(todo.id)} />
    ));

    return (
      <div>
        <h1>Todos</h1>
        <div>
          <div className="input-group">
            <label>
              Todo text:
              <input
                className="form-control"
                value={this.state.newTodo}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button
            className="btn btn-info"
            disabled={this.state.disabled}
            onClick={this.createTodo}
          >
            Create
          </button>
        </div>
        <ul className="list-group top-buffer">{TodoComponents}</ul>
      </div>
    );
  }
}
