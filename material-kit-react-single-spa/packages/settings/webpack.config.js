const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'some-org',
    projectName: 'settings-page',
    webpackConfigEnv,
    argv
  });

  return merge(defaultConfig, {
    externals: [
      '@some-org/icons',
      '@some-org/components',
      'react',
      'react-dom',
      '@material-ui/core'
    ]
  });
};
