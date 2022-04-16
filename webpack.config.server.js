const path = require('path');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');

const sharedConfig = require('./webpack.config.shared');

module.exports = {
  ...sharedConfig,

  target: 'node',
  devtool: 'inline-source-map',
  entry: './src/server/index.jsx',
  externals: [nodeExternals()],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
    publicPath: '/public/',
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      { test: /\.html$/, use: ['html-loader'] },

      { test: /\.(sc|sa|c)ss$/, use: ['ignore-loader'] },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [new Dotenv('./.env')],
};
