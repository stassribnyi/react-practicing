import { EventEmitter } from 'events';

import dispatcher from '../AppDispatcher';

import { CREATE_TODO, FETCH_TODOS, DELETE_TODO } from '../actions/types';

const initialState = [];

class TodoStore extends EventEmitter {
  constructor(state = initialState) {
    super();

    this.todos = state;
  }

  getAll() {
    return this.todos;
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
  getAll: () => todoStore.getAll(),
  on: (...params) => todoStore.on(...params),
  removeListener: (...params) => todoStore.removeListener(...params)
};

export default storeProxy;
