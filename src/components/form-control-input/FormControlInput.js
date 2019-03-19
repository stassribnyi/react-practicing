import React from 'react';

import './FormControlInput.css';

export default props => (
  <div className="FormControlInput input-group">
    <label className="form-control-input-label">
      {props.label}
      <textarea
        className="form-control"
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  </div>
);
