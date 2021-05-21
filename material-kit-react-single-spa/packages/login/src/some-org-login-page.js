import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import singleSpaReact from 'single-spa-react';
import Root from './root.component';

const withBrowserRouter = (C) => {
  const WrapperWithBrowserRouter = (props) => (
    <BrowserRouter>
      <C {...props} />
    </BrowserRouter>
  );

  return WrapperWithBrowserRouter;
};

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: withBrowserRouter(Root),
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  }
});

export const { bootstrap, mount, unmount } = lifecycles;
