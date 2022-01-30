const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const UglifyJsPlugin     = require('uglifyjs-webpack-plugin');
const merge              = require('webpack-merge');
const common             = require('./webpack.common.config');
const path               = require('path');
const { GENERAL, PATHS } = require('../../settings');
const { EnvironmentPlugin } = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackChangeAssetsExtensionPlugin = require('html-webpack-change-assets-extension-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'tslint-loader',
        enforce: 'pre',
        options: {
          configFile: PATHS.configs.tslint,
          emitErrors: true,
          typeCheck: true,
          tsConfigFile: PATHS.configs.tsconfig,
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: path.join(PATHS.cache, 'uglifyjs-webpack-plugin'),
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          compress: true,
          mangle: true,
        },
      }),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        zxcvbn: {
          test: /zxcvbn/
        }
      }
    }
  },
  output: {
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin([ PATHS.build], {
      root: PATHS.root,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      filename: PATHS.index.output,
      template: PATHS.index.input,
      title: GENERAL.name
    }),
    new EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
    new CopyWebpackPlugin([
      {
        context: PATHS.assets,
        from: '**/*',
        to: 'static/assets/',
      }
    ]),
    new CompressionPlugin({
      test: /\.(js|css)$/,
    }),
    new HtmlWebpackChangeAssetsExtensionPlugin(),
  ],
});
