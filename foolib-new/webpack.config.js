const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: { foolib: ['./lib/index'] },
  mode: 'production',
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: ['.js']
  },
  output: {
    filename: 'foolib.js',
    library: '[name]_[hash]',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, 'dist/manifest.json'),
      entryOnly: true
    })
  ]
};
