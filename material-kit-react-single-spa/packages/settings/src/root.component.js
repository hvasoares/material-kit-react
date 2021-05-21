import React from 'react';
import { withDashboardLayout } from '@some-org/components';

import Settings from './Settings';

const WrappedSettings = withDashboardLayout(Settings);
export default function Root(props) {
  return <WrappedSettings {...props} />;
}
