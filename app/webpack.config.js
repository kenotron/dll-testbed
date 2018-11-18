const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  entry: './src/index',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            // transpileOnly: true
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      foolib: require.resolve('foolib/lib/index')
    }
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      scope: 'foolib',
      manifest: require('foolib/dist/manifest.json')
    }),
    new HtmlWebpackPlugin(),
    new AddAssetPlugin({ filepath: require.resolve('foolib/dist/foolib.js') })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
