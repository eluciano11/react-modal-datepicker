const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './lib/index.js',

  output: {
    library: 'ModalDatePicker',
    libraryTarget: 'umd',
    path: 'dist',
    filename: 'react-modal-datepicker.js'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: [
          path.resolve(__dirname, 'lib', 'styles')
        ]
      },
      {
        test: /\.js/,
        loaders: ['babel'],
        include: [path.resolve(__dirname, 'lib')]
      }
    ]
  }
};
