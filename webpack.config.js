const webpack = require('webpack');

module.exports = {
  entry: './browser/react/index.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'

  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']

        }

      }

    ]

  }

};

