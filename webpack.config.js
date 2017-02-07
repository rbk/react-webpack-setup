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
      },

      // json
      {
        test: /\.json$/,
        loader: 'json',
      },

      // static files
      {
        test: /[\s\S]*$/,
        include: resolve('./assets/dist'),
        loader: 'file?name=[name].[ext]',
      },

      // images
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=10000!image-webpack',
      }
    ],
  }
};