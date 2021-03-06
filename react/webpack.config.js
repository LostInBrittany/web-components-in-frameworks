"use strict";

const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:9002',
    'react-hot-loader/patch',
    'react-polymer/index',
    path.resolve(__dirname, 'client/Main.js')
  ],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot-loader/webpack', 'babel?presets[]=react&presets[]=es2015']
    }]
  },
  devServer: {
    contentBase: '.',
    stats: {
      colors: true
    },
    proxy: {
      "/api": {
        target: 'http://localhost:3001'
      }
    },
    hot: true
  }
}
