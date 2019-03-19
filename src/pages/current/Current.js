import React, { Component } from 'react';

import './Current.css';

import { TodoItemForm } from '../../components';

import * as actions from '../../actions/todoActions';
import TodoPage from '../todo-page/TodoPage';

export default class Current extends Component {
  constructor(props) {
    super(props);

    this.createTodo = this.createTodo.bind(this);
  }

  createTodo(todoToAdd) {
    actions.createTodo(todoToAdd);
  }

  render() {
    return (
      <div>
        <h1>Current To-Do</h1>
        <TodoItemForm onCreateTodo={this.createTodo} />
        <TodoPage todoCondition={todo => !todo.complete} />
      </div>
    );
  }
}
