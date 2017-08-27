var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

var in_prod_env = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: 'source-map',
  devServer: {
    port: 9000
  },

  entry: {
    main: ['./src/scripts/main.js', './src/styles/main.scss']
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.glsl$/,
        use: 'raw-loader'
      },
      {
        test: /\.ejs$/,
        use: 'ejs-loader'
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          loader: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(png|jpe?g|mp4|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs'
    }),

    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: in_prod_env
    }),

    new DashboardPlugin()
  ]
};

if (in_prod_env) {
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());
}
