var path = require('path')

module.exports = {
  entry: './src/snackbar.js',
  output: {
    filename: 'snackbar.js',
    path: path.resolve(__dirname, 'dist')
  }
}
