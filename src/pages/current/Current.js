import React, { Component } from 'react';

import './Current.css';

import { FormControlInput, Todo } from '../../components';

import { TodoStore as store } from '../../stores';
import * as actions from '../../actions/todoActions';

export default class Current extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: store.getAll(),
      disabled: true,
      todoToAdd: ''
    };

    this.getTodos = this.getTodos.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getTodos() {
    this.setState({
      todos: store.getAll()
    });
  }

  createTodo() {
    if (this.state.disabled) {
      return;
    }

    actions.createTodo(this.state.todoToAdd);

    this.setState({
      todoToAdd: '',
      disabled: true
    });
  }

  deleteTodo(id) {
    actions.deleteTodo(id);
  }

  toggleFavorite(todo) {
    actions.toggleFavorite(todo);
  }

  toggleComplete(todo) {
    actions.toggleComplete(todo);
  }

  handleChange({ target }) {
    const todoDescription = target.value;

    this.setState({
      todoToAdd: todoDescription,
      disabled: todoDescription.length === 0
    });
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onDelete={() => this.deleteTodo(todo.id)}
        onComplete={() => this.toggleComplete(todo)}
        onFavorite={() => this.toggleFavorite(todo)}
      />
    ));

    return (
      <div>
        <h1>All Todos</h1>
        <div>
          <FormControlInput
            label="Todo text:"
            value={this.state.todoToAdd}
            onChange={this.handleChange}
          />
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

  componentWillMount() {
    actions.fetchTodos();
    store.on('change', this.getTodos);
  }

  componentWillUnmount() {
    store.removeListener('change', this.getTodos);
  }
}
