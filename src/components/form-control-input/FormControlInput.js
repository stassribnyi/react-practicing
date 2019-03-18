import React from 'react';

import './FormControlInput.css';

export default props => (
  <div className="input-group">
    <label>
      {props.label}
      <input
        className="form-control"
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  </div>
);
