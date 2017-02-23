const path = require('path');
const webpack = require('webpack');
const resolve = require('path').resolve;

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
  	vendor: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      // babel
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
  }
};