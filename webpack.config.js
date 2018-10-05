var path = require('path');
 
module.exports = {
  mode: 'production',
  entry: './src/CountUp.js',
  output: {
    path: path.resolve('lib'),
    filename: 'CountUp.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  }
}