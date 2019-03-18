import { EventEmitter } from 'events';

import TodoConstants from '../constants/TodoConstants';
import TodoDispatcher from '../dispatchers/TodoDispatcher';

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [];
    }

    createTodo(todo) {
        this.todos.push(todo);

        this.emitChange();
    }

    deleteTodo(id) {
        const index = this.todos.findIndex((todo) => todo.id === id);

        this.todos.splice(index, 1);

        this.emitChange();
    }

    emitChange() {
        this.emit('change');
    }

    getAll() {
        return this.todos;
    }

    handleActions(action) {
        switch (action.type) {
            case TodoConstants.CREATE_TODO:
                this.createTodo(action.todo);
                break;
            case TodoConstants.DELETE_TODO:
                this.deleteTodo(action.id);
                break;
            case TodoConstants.FETCH_TODOS:
                this.fetchTodos(action.todos);
                break;
            default:
                break;
        }
    }

    fetchTodos(todos) {
        this.todos = [...todos];

        this.emitChange();
    }
}

const todoStore = new TodoStore();

TodoDispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;