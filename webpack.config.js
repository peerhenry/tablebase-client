var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './main.jsx',

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.scss'],
    root: path.resolve(__dirname),
    alias: {
      styles: "src/stylesheets",
      pages: "src/Pages",
      navbar: "src/Navbar",
      menu: "src/Menu",
      table: "src/Pages/TablePage/Table",
      tableButtons: "src/Pages/TablePage/Buttons",
      pageComponents: "src/Pages/PageComponents"
    }
  },

  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: 'node_modules',
        query: {
          presets: ['es2015', 'react'],
          compact: false
        }
      },
      {
        test:/\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass')
      }
    ]
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'redux': 'Redux',
    'react-redux': 'ReactRedux',
    'immutable': 'Immutable',
    'redux-thunk': 'ReduxThunk'
  },

  plugins: [
      new HtmlWebpackPlugin({
          template: 'index.html'
      }),
      new ExtractTextPlugin("style.css")
  ]
}