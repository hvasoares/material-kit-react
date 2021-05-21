import React from 'react';
import PropTypes from 'prop-types';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './GlobalStyles';
import './mixins/chartjs';
import theme from './theme';

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node
};

export default Theme;
