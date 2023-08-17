const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: '/client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.s?css/,
        //exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  
  // tells devServer WHAT to serve
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Development',
        template: './client/index.html',
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    // // enable HMR on the devServer
    // hot: true,
    // // fallback to root for other urls
    // historyApiFallback: true,

    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },

    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};