import React from 'react';
import { experimentalStyled } from '@material-ui/core';
import MainNavbar from './MainNavbar';
import Theme from './ThemeProvider';

import withBrowserRouter from './withBrowserRouter';

const MainLayoutRoot = experimentalStyled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%'
}));

const MainLayoutWrapper = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64
});

const MainLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const MainLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const MainLayout = withBrowserRouter(({ children }) => (
  <Theme>
    <MainLayoutRoot>
      <MainNavbar />
      <MainLayoutWrapper>
        <MainLayoutContainer>
          <MainLayoutContent>{children}</MainLayoutContent>
        </MainLayoutContainer>
      </MainLayoutWrapper>
    </MainLayoutRoot>
  </Theme>
));

export default (C) => (props) =>
  (
    <MainLayout>
      <C {...props} />
    </MainLayout>
  );
