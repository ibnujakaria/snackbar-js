var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebPackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/snackbar.js',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebPackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Snackbar in Action',
      template: 'index.html'
    })
  ],
  output: {
    filename: 'snackbar.js',
    path: path.resolve(__dirname, 'dist')
  }
}
