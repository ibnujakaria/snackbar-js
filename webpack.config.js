var path = require('path')
var CleanWebPackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry: './src/snackbar.js',
  plugins: [
    new CleanWebPackPlugin(['dist'])
  ],
  output: {
    filename: 'snackbar.js',
    path: path.resolve(__dirname, 'dist')
  }
}
