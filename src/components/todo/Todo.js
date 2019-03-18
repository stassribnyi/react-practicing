import React from 'react';

import './Todo.css';

export default props => {
  const { text, complete, favorite, onComplete, onFavorite, onDelete } = props;

  const completeClass = [
    'complete',
    complete ? 'complete-checked' : 'complete-unchecked'
  ].join(' ');
  const completeTitle = complete ? 'Unmark as complete' : 'Mark as complete';

  const favoriteClass = [
    'favorite',
    favorite ? 'favorite-checked' : 'favorite-unchecked'
  ].join(' ');
  const favoriteTitle = favorite ? 'Remove from favorites' : 'Add to favorites';

  return (
    <li className="todo list-group-item">
      <span
        title={completeTitle}
        className={completeClass}
        onClick={onComplete}
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
