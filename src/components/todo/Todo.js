import React from 'react';

import './Todo.css';

export default props => {
  const { text, complete, favorite, onComplete, onFavorite, onDelete } = props;

  const favoriteClass = [
    'favorite',
    favorite ? 'favorite-checked' : 'favorite-unchecked'
  ].join(' ');

  const completeTitle = complete ? 'Unmark as complete' : 'Mark as complete';
  const favoriteTitle = favorite ? 'Remove from favorites' : 'Add to favorites';

  return (
    <li className="todo list-group-item">
      <input
        type="checkbox"
        checked={complete}
        title={completeTitle}
        onChange={onComplete}
      />
      <span className="todo-description">{text}</span>
      <span
        title={favoriteTitle}
        className={favoriteClass}
        onClick={onFavorite}
      />
      <span
        title="Remove todo"
        className="badge badge-delete"
        onClick={onDelete}
      >
        &times;
      </span>
    </li>
  );
};
