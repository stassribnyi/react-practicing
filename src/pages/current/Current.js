import React, { Component } from 'react';

import './Current.css';

import { FormControlInput } from '../../components';

import * as actions from '../../actions/todoActions';
import TodoPage from '../todo-page/TodoPage';

export default class Current extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      todoToAdd: ''
    };
    this.createTodo = this.createTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange({ target }) {
    const todoDescription = target.value;

    this.setState({
      todoToAdd: todoDescription,
      disabled: todoDescription.length === 0
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>Current Todos</h1>
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
        <TodoPage todoCondition={todo => !todo.complete} />
      </div>
    );
  }
}
