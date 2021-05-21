import React from 'react';
import { withDashboardLayout } from '@some-org/components';
import ProductList from './ProductList';

const WrappedProductList = withDashboardLayout(ProductList);

export default function Root(props) {
  return <WrappedProductList {...props} />;
}
