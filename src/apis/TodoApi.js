import axios from 'axios';

import config from '../assets/config';

const instance = axios.create({
  baseURL: config.API_URL
});

class TodoApi {
  getAll() {
    return instance.get('/todos');
  }

  createTodo(todo) {
    return instance.post('/todos', todo);
  }

  updateTodo(todo) {
    return instance.put(`/todos/${todo.id}`, todo);
  }

  deleteTodo(id) {
    return instance.delete(`/todos/${id}`);
  }
}

export default new TodoApi();
