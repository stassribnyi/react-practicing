import React from 'react';

import TodoItem from './todo-item';

export default props => {
  const { items, onDelete, onComplete, onFavorite } = props;

  const TodoItems = items.map(todo => (
    <TodoItem
      key={todo.id}
      {...todo}
      onDelete={() => onDelete(todo.id)}
      onComplete={() => onComplete(todo)}
      onFavorite={() => onFavorite(todo)}
    />
  ));

  return <ul className="list-group">{TodoItems}</ul>;
};
