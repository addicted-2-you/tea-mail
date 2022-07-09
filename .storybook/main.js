const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.jsx'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],

  framework: '@storybook/react',

  core: {
    builder: '@storybook/builder-webpack5',
  },

  webpackFinal: async (config, { configType }) => {
    const filesRule = config.module.rules.find((r) => r.test.test('.svg'));
    filesRule.exclude = /\.svg$/;
    config.module.rules.push({ test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' });

    // alias
    config.resolve.alias = {
      '~': path.resolve(__dirname, '../src/'),
    };

    return config;
  },
};
