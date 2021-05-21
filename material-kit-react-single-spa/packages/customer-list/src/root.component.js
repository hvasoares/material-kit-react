import React from 'react';
import CustomerList from './CustomerList';
import { withDashboardLayout } from '@some-org/components';

const WrappedCustomerList = withDashboardLayout(CustomerList);

export default function Root(props) {
  return <WrappedCustomerList {...props} />;
}
