import React, { Component } from 'react';

import './Favorite.css';

import TodoPage from '../todo-page/TodoPage';

export default class Favorite extends Component {
  render() {
    return (
      <div>
        <h1>Favorite To-Do</h1>
        <TodoPage todoCondition={todo => todo.favorite} />
      </div>
    );
  }
}
