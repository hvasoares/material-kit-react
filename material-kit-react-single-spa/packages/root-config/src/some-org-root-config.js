import { registerApplication, start } from 'single-spa';

// registerApplication({
//   name: '@single-spa/welcome',
//   app: () =>
//     System.import(
//       'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
//     ),
//   activeWhen: ['/']
// });

registerApplication({
  name: '@some-org/root-login-page',
  app: () => System.import('@some-org/root-login-page'),
  activeWhen: ['/', '/app/login'],
  customProps: {
    domElement: document.getElementById('root')
  }
});

registerApplication({
  name: '@some-org/dashboard-page',
  app: () => System.import('@some-org/dashboard-page'),
  activeWhen: ['/app/dashboard'],
  customProps: {
    domElement: document.getElementById('root')
  }
});

start({
  urlRerouteOnly: true
});
