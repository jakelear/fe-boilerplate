const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/scripts/main.js',
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]',
        },
        test: /\.(png|jpe?g|mp4|gif|svg|eot|ttf|woff|woff2)$/,
      },
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.jsx?$/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
