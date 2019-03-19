import React, { Component } from 'react';

import './TodoItemForm.css';

import FormControlInput from '../form-control-input';

export default class TodoItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      todoToAdd: ''
    };

    this.createTodo = this.createTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  createTodo() {
    if (this.state.disabled) {
      return;
    }

    this.setState({
      disabled: true,
      todoToAdd: ''
    });

    this.props.onCreateTodo(this.state.todoToAdd);
  }

  handleChange({ target }) {
    const todoDescription = target.value;

    this.setState({
      todoToAdd: todoDescription,
      disabled: todoDescription.length === 0
    });
  }

  render() {
    return (
      <div className="TodoItemForm">
        <FormControlInput
          label="To-Do description"
          value={this.state.todoToAdd}
          onChange={this.handleChange}
        />
        <button
          className="btn btn-info"
          disabled={this.state.disabled}
          onClick={this.createTodo}
        >
          Add To-Do
        </button>
      </div>
    );
  }
}
