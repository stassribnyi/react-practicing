import { EventEmitter } from 'events';

import dispatcher from '../AppDispatcher';

import {
  CREATE_TODO,
  FETCH_TODOS,
  UPDATE_TODO,
  DELETE_TODO
} from '../actions/types';

const initialState = [];

class TodoStore extends EventEmitter {
  constructor(state = initialState) {
    super();

    this.todos = state;
  }

  getAll(condition) {
    if (typeof condition !== 'function') {
      return this.todos;
    }

    return this.todos.filter(condition);
  }

  createTodo(todo) {
    this.todos.push(todo);

    this.emitChange();
  }

  deleteTodo(id) {
    const index = this.todos.findIndex(todo => todo.id === id);

    this.todos.splice(index, 1);

    this.emitChange();
  }

  updateTodo(todoToUpdate) {
    const index = this.todos.findIndex(todo => todo.id === todoToUpdate.id);

    this.todos.splice(index, 1, todoToUpdate);

    this.emitChange();
  }

  fetchTodos(todos) {
    this.todos = [...todos];

    this.emitChange();
  }

  handleActions({ type, payload }) {
    switch (type) {
      case CREATE_TODO: {
        this.createTodo(payload);
        break;
      }
      case DELETE_TODO: {
        this.deleteTodo(payload);
        break;
      }
      case UPDATE_TODO: {
        this.updateTodo(payload);
        break;
      }
      case FETCH_TODOS: {
        this.fetchTodos(payload);
        break;
      }
      default:
        break;
    }
  }

  emitChange() {
    this.emit('change');
  }
}

const todoStore = new TodoStore();

dispatcher.register(todoStore.handleActions.bind(todoStore));

const storeProxy = {
  on: (...params) => todoStore.on(...params),
  getAll: (...params) => todoStore.getAll(...params),
  removeListener: (...params) => todoStore.removeListener(...params)
};

export default storeProxy;
