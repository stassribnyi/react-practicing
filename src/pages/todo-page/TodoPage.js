import React, { Component } from 'react';

import './TodoPage.css';

import { TodoList } from '../../components';

import { TodoStore as store } from '../../stores';
import * as actions from '../../actions/todoActions';

export default class TodoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: []
    };

    this.fetchTodo = this.fetchTodo.bind(this);

    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  fetchTodo() {
    this.setState({
      todoList: store.getAll(this.props.todoCondition)
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
    const { todoList } = this.state;

    return (
      <div className="TodoPage">
        {todoList.length ? (
          <TodoList
            items={this.state.todoList}
            onDelete={this.deleteTodo}
            onComplete={this.toggleComplete}
            onFavorite={this.toggleFavorite}
          />
        ) : (
          <div className="alert alert-success">
            <strong>Hey, nothing wrong!</strong>
            <h2 className="text-info">No such To-Do found 📖</h2>
          </div>
        )}
      </div>
    );
  }

  componentWillMount() {
    actions.fetchTodo();
    store.on('change', this.fetchTodo);
  }

  componentWillUnmount() {
    store.removeListener('change', this.fetchTodo);
  }
}
