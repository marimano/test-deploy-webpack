const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // where to start from
  output: {
    path: path.resolve(__dirname, 'build'), // where to put the result
    filename: 'build[fullhash].js', // fullhash to gurantee updating file on client side - cache issue
    clean: true
    //publicPath: './'
  },
  plugins: [
    new HtmlPlugin({
      template: './src/index.html' // basic html and to add build to it
    }),
    new CssPlugin({
      filename: 'styles[fullhash].css' // all css goes to this file and is added to html
    })
  ],
  devServer: { // to start server locally
    port: 5500,
    static: {
      directory: path.join(__dirname, 'build')
    },
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true
    },
    open: true
  },
  module: {
    rules: [ // what to do to each type of file
      {
        test: /\.scss$/,
        use: [
          CssPlugin.loader, // put all css into a file
          'css-loader', // understands what means import '*.css'
          'sass-loader'
        ]
      }
    ]
  }
}