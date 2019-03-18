import TodoDispatcher from '../dispatchers/TodoDispatcher'

import TodoApi from '../apis/TodoApi';
import TodoConstants from '../constants/TodoConstants';

export function createTodo(text) {
    let newTodo = {
        text,
        complete: false
    };

    TodoApi.createTodo(newTodo).then((response) => {
        TodoDispatcher.dispatch({
            type: TodoConstants.CREATE_TODO,
            todo: response.data
        });
    });
}

export function deleteTodo(id) {
    TodoApi.deleteTodo(id).then((response) => {
        TodoDispatcher.dispatch({
            type: TodoConstants.DELETE_TODO,
            id
        });
    });
}

export function fetchTodos() {
    TodoApi.getAll().then((response) => {
        TodoDispatcher.dispatch({
            type: TodoConstants.FETCH_TODOS,
            todos: response.data
        });
    });
}