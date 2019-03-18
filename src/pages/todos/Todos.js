import React, { Component } from 'react';

import './Todos.css';

import Todo from '../../components/Todo';

import { FormControlInput } from '../../components';

import { TodoStore as store } from '../../stores';
import * as actions from '../../actions/todoActions';

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: store.getAll(),
      disabled: true,
      newTodo: ''
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

    actions.createTodo(this.state.newTodo);

    this.setState({
      newTodo: '',
      disabled: true
    });
  }

  deleteTodo(id) {
    actions.deleteTodo(id);
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
          <FormControlInput
            label="Todo text:"
            value={this.state.newTodo}
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
