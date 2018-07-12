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

    getAll() {
        return this.todos;
    }
}

const todoStore = new TodoStore;

export default todoStore;