import React, { Component } from 'react';

import './TodoPage.css';

import { TodoList } from '../../components';

import { TodoStore as store } from '../../stores';
import * as actions from '../../actions/todoActions';

export default class TodoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.fetchTodos = this.fetchTodos.bind(this);

    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  fetchTodos() {
    this.setState({
      todos: store.getAll(this.props.todoCondition)
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

  render() {
    const { todos } = this.state;

    return (
      <div className="TodoPage">
        {todos.length ? (
          <TodoList
            items={this.state.todos}
            onDelete={this.deleteTodo}
            onComplete={this.toggleComplete}
            onFavorite={this.toggleFavorite}
          />
        ) : (
          <div className="alert alert-success">
            <strong>Hey, nothing wrong!</strong>
            <h2 className="text-info">No such todos found 📖</h2>
          </div>
        )}
      </div>
    );
  }

  componentWillMount() {
    actions.fetchTodos();
    store.on('change', this.fetchTodos);
  }

  componentWillUnmount() {
    store.removeListener('change', this.fetchTodos);
  }
}
