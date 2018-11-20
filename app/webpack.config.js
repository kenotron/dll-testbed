require('dotenv/config');

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetPlugin = require('add-asset-html-webpack-plugin');

const foolibPath = path.resolve(__dirname, '..', process.env.FOOLIB_PATH);
const targetPath = path.resolve(__dirname, 'node_modules/foolib');

if (fs.existsSync(targetPath)) {
  fs.unlinkSync(targetPath);
}

fs.symlinkSync(foolibPath, targetPath, 'junction');

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
      //foolib$: '../../foolib-new/lib/index.js'

      foolib$: path.join(foolibPath, 'lib/index.js')
    }
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: foolibPath,
      manifest: path.join(foolibPath, 'dist/manifest.json')
    }),
    new HtmlWebpackPlugin(),
    new AddAssetPlugin({ filepath: path.join(foolibPath, 'dist/foolib.js') })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
