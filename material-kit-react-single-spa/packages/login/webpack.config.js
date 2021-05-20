const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'some-org',
    projectName: 'login-page',
    webpackConfigEnv,
    argv
  });

  return merge(defaultConfig, {
    externals: ['@some-org/icons', 'react', 'react-dom']
    // modify the webpack config however you'd like to by adding to this object
  });
};
