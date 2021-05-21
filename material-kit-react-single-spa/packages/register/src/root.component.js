import React from 'react';
import { withMainLayout } from '@some-org/components';
import Register from './Register';
import { BrowserRouter } from 'react-router-dom';

const WrappedRegister = withMainLayout(Register);

export default function Root(props) {
  return (
    <BrowserRouter>
      <WrappedRegister {...props} />
    </BrowserRouter>
  );
}
