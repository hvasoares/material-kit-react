const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'some-org',
    projectName: 'icons',
    webpackConfigEnv,
    argv
  });

  return merge(defaultConfig, {
    externals: ['react', 'react-dom']
  });
};
