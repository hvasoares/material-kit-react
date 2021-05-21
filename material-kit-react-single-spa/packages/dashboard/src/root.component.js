import React from 'react';
import DashBoard from './Dashboard';
import { withDashboardLayout } from '@some-org/components';

const WrappedDashBoard = withDashboardLayout(DashBoard);
export default function Root(props) {
  return <WrappedDashBoard {...props} />;
}
