const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetPlugin = require('add-asset-html-webpack-plugin');

const foolibPath = 'foolib-new';
const targetPath = path.resolve(`node_modules/foolib`);

if (fs.existsSync(targetPath)) {
  fs.unlinkSync(targetPath);
}

fs.symlinkSync(path.resolve('..', foolibPath), targetPath, 'junction');

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
      foolib: path.resolve(`../${foolibPath}/lib/index`)
    }
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      scope: 'foolib',
      manifest: path.resolve(`../${foolibPath}/dist/manifest.json`)
    }),
    new HtmlWebpackPlugin(),
    new AddAssetPlugin({ filepath: path.resolve(`../${foolibPath}/dist/foolib.js`) })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
