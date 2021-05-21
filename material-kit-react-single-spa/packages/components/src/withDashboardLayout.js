import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { experimentalStyled } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayoutRoot = experimentalStyled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%'
}));

const DashboardLayoutWrapper = experimentalStyled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 256
  }
}));

const DashboardLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const DashboardLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const DashboardLayout = ({ children }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <BrowserRouter>
      <DashboardLayoutRoot>
        <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
        <DashboardSidebar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />
        <DashboardLayoutWrapper>
          <DashboardLayoutContainer>
            <DashboardLayoutContent>{children}</DashboardLayoutContent>
          </DashboardLayoutContainer>
        </DashboardLayoutWrapper>
      </DashboardLayoutRoot>
    </BrowserRouter>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node
};

export default (C) => (props) =>
  (
    <DashboardLayout>
      <C {...props} />
    </DashboardLayout>
  );
