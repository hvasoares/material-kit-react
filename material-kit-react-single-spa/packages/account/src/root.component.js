import React from 'react';
import { withDashboardLayout } from '@some-org/components';
import Account from './Account';

const WrappedAccount = withDashboardLayout(Account);

export default function Root(props) {
  return <WrappedAccount {...props} />;
}
