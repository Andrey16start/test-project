import React from 'react';

import './Spinner.scss';

const Spinner = ({ spinnerSize = "100%" }) => (
  <div
    style={{ width: spinnerSize, height: spinnerSize, minWidth: spinnerSize, minHeight: spinnerSize }}
    className='loader'
    alt="Loading..." />
);

export default Spinner;