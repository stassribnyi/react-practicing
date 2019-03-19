import React, { Component } from 'react';

import './Complete.css';

import TodoPage from '../todo-page/TodoPage';

export default class Complete extends Component {
  render() {
    return (
      <div>
        <h1>Complete To-Do</h1>
        <TodoPage todoCondition={todo => todo.complete} />
      </div>
    );
  }
}
