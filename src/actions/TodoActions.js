import dispatcher from '../AppDispatcher';

import todoApi from '../apis/todoApi';

import { CREATE_TODO, DELETE_TODO, FETCH_TODOS } from './types';

export function createTodo(text) {
  const todoToAdd = {
    text,
    complete: false
  };

  todoApi.createTodo(todoToAdd).then(({ data }) => {
    dispatcher.dispatch({
      type: CREATE_TODO,
      payload: data
    });
  });
}

export function deleteTodo(id) {
  todoApi.deleteTodo(id).then(() => {
    dispatcher.dispatch({
      type: DELETE_TODO,
      payload: id
    });
  });
}

export function fetchTodos() {
  todoApi.getAll().then(({ data }) => {
    dispatcher.dispatch({
      type: FETCH_TODOS,
      payload: data
    });
  });
}
