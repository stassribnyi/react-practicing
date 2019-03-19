import dispatcher from '../AppDispatcher';

import todoApi from '../apis/todoApi';

import {
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  FETCH_TODO,
  SHOW_LOADER,
  HIDE_LOADER
} from './types';

export function createTodo(text) {
  const todoToAdd = {
    text,
    complete: false,
    favorite: false
  };

  dispatcher.dispatch({ type: SHOW_LOADER });

  todoApi.createTodo(todoToAdd).then(({ data }) => {
    dispatcher.dispatch({
      type: CREATE_TODO,
      payload: data
    });

    dispatcher.dispatch({ type: HIDE_LOADER });
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({ type: SHOW_LOADER });

  todoApi.deleteTodo(id).then(() => {
    dispatcher.dispatch({
      type: DELETE_TODO,
      payload: id
    });

    dispatcher.dispatch({ type: HIDE_LOADER });
  });
}

export function toggleFavorite(todo) {
  const todoToUpdate = { ...todo, favorite: !todo.favorite };

  dispatcher.dispatch({ type: SHOW_LOADER });

  todoApi.updateTodo(todoToUpdate).then(({ data }) => {
    dispatcher.dispatch({
      type: UPDATE_TODO,
      payload: data
    });

    dispatcher.dispatch({ type: HIDE_LOADER });
  });
}

export function toggleComplete(todo) {
  const todoToUpdate = { ...todo, complete: !todo.complete };

  dispatcher.dispatch({ type: SHOW_LOADER });

  todoApi.updateTodo(todoToUpdate).then(({ data }) => {
    dispatcher.dispatch({
      type: UPDATE_TODO,
      payload: data
    });

    dispatcher.dispatch({ type: HIDE_LOADER });
  });
}

export function fetchTodo() {
  dispatcher.dispatch({ type: SHOW_LOADER });

  todoApi.getAll().then(({ data }) => {
    dispatcher.dispatch({
      type: FETCH_TODO,
      payload: data
    });

    dispatcher.dispatch({ type: HIDE_LOADER });
  });
}
