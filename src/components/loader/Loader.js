import React from 'react';

import './Loader.css';

export default props => (props.visible ? <div className="loader" /> : null);
