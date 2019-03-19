import axios from 'axios';

import config from '../assets/config';

const instance = axios.create({
  baseURL: config.API_URL
});

class TodoApi {
  get todoUrl() {
    return '/todo';
  }

  getAll() {
    return instance.get(this.todoUrl);
  }

  createTodo(todo) {
    return instance.post(this.todoUrl, todo);
  }

  updateTodo(todo) {
    return instance.put(`${this.todoUrl}/${todo.id}`, todo);
  }

  deleteTodo(id) {
    return instance.delete(`${this.todoUrl}/${id}`);
  }
}

export default new TodoApi();
