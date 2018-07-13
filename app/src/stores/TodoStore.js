import { EventEmitter } from 'events';
import TodoDispatcher from '../dispatchers/TodoDispatcher';

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 1531413197,
                text: 'Learn flux',
                complete: false
            },
            {
                id: 1531413283,
                text: 'Practice React',
                complete: false
            }
        ];
    }

    createTodo(text) {
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete: false
        });

        this.emit('change');
    }

    deleteTodo(id) {
        const index = this.todos.findIndex((todo) => todo.id === id);

        this.todos.splice(index, 1);

        this.emit('change');
    }

    getAll() {
        return this.todos;
    }

    handleActions(action) {
        switch (action.type) {
            case 'CREATE_TODO':
                this.createTodo(action.text);
                break;
            case 'DELETE_TODO':
                this.deleteTodo(action.id);
                break;
            default:
                break;
        }
    }
}

const todoStore = new TodoStore();

TodoDispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispather = TodoDispatcher;
export default todoStore;