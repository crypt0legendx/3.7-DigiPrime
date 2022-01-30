const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const { EnvironmentPlugin, HotModuleReplacementPlugin } = require('webpack');
const { GENERAL, PATHS, WEB_SERVER } = require('../../settings');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    contentBase: PATHS.output,
    historyApiFallback: true,
    hot: true,
    overlay: true,
    staticOptions: {
      redirect: false,
    },
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'tslint-loader',
        enforce: 'pre',
        options: {
          configFile: PATHS.configs.tslint,
          emitErrors: false,
          typeCheck: true,
          tsConfigFile: PATHS.configs.tsconfig,
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: PATHS.devIndex.output,
      template: PATHS.devIndex.input,
      title: GENERAL.name,
    }),
    new EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
    new CopyWebpackPlugin([
      {
        context: PATHS.assets,
        from: '**/*',
        to: 'static/assets/',
      }
    ]),
  ],
  output: {
    path: PATHS.output,
    filename: '[name].[hash].js',
    publicPath: '/',
  },
});
