import { EventEmitter } from 'events';

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

    getAll() {
        return this.todos;
    }
}

const todoStore = new TodoStore();
window.todoStore = todoStore;
export default todoStore;