import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default (C) => (props) =>
  (
    <BrowserRouter>
      <C {...props} />
    </BrowserRouter>
  );
