import dispatcher from '../AppDispatcher';

import todoApi from '../apis/todoApi';

import { CREATE_TODO, DELETE_TODO, UPDATE_TODO, FETCH_TODO } from './types';

export function createTodo(text) {
  const todoToAdd = {
    text,
    complete: false,
    favorite: false
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

export function toggleFavorite(todo) {
  const todoToUpdate = { ...todo, favorite: !todo.favorite };

  todoApi.updateTodo(todoToUpdate).then(({ data }) => {
    dispatcher.dispatch({
      type: UPDATE_TODO,
      payload: data
    });
  });
}

export function toggleComplete(todo) {
  const todoToUpdate = { ...todo, complete: !todo.complete };

  todoApi.updateTodo(todoToUpdate).then(({ data }) => {
    dispatcher.dispatch({
      type: UPDATE_TODO,
      payload: data
    });
  });
}

export function fetchTodo() {
  todoApi.getAll().then(({ data }) => {
    dispatcher.dispatch({
      type: FETCH_TODO,
      payload: data
    });
  });
}
