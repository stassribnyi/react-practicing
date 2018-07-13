import TodoDispatcher from '../dispatchers/TodoDispatcher'

export function createTodo(text) {
    TodoDispatcher.dispatch({
        type: 'CREATE_TODO',
        text
    });
}

export function deleteTodo(id) {
    TodoDispatcher.dispatch({
        type: 'DELETE_TODO',
        id
    });
}