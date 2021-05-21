import React from 'react';
import { withMainLayout } from '@some-org/components';

import NotFound from './NotFound';

const WrappedNotFound = withMainLayout(NotFound);

export default function Root(props) {
  return <WrappedNotFound {...props} />;
}
