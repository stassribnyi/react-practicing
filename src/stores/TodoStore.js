import { EventEmitter } from 'events';

import dispatcher from '../AppDispatcher';

import {
  CREATE_TODO,
  FETCH_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from '../actions/types';

const initialState = [];

class TodoStore extends EventEmitter {
  constructor(state = initialState) {
    super();

    this.todoList = state;
  }

  getAll(condition) {
    if (typeof condition !== 'function') {
      return this.todoList;
    }

    return this.todoList.filter(condition);
  }

  createTodo(todo) {
    this.todoList.push(todo);

    this.emitChange();
  }

  deleteTodo(id) {
    const index = this.todoList.findIndex(todo => todo.id === id);

    this.todoList.splice(index, 1);

    this.emitChange();
  }

  updateTodo(todoToUpdate) {
    const index = this.todoList.findIndex(todo => todo.id === todoToUpdate.id);

    this.todoList.splice(index, 1, todoToUpdate);

    this.emitChange();
  }

  fetchTodo(todoList) {
    this.todoList = [...todoList];

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
      case FETCH_TODO: {
        this.fetchTodo(payload);
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
