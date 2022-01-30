const CopyWebpackPlugin       = require('copy-webpack-plugin');
const path                    = require('path');
const { PATHS } = require('../../settings');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      PATHS.entry,
    ]
  },
  resolve: {
    alias: {
      app: PATHS.src.app,
      components: PATHS.src.components,
      context: PATHS.src.context,
      pages: PATHS.src.pages,
    },
    extensions: [ '.ts', '.tsx', '.js', '.scss', '.css' ],
    modules: [PATHS.client, PATHS.root, PATHS.node_modules],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(png|gif|jpg|cur)$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          publicPath: '/',
        },
      },
    ],
  },
  target: 'web',
  output: {
    path: PATHS.static,
    filename: '[name].[contenthash].js',
    publicPath: '/static/',
  }
};
