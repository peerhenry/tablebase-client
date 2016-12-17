var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  context: __dirname+'/src',
  entry: './main',

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
    alias: {}
  },

  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: 'node_modules',
        query: {
          presets: ['es2015', 'react']
        }
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
      })
  ]
}