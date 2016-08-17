var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: __dirname + '/build',
    filename: "js/app.js"
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/index.html', to: 'index.html'
    }])
  ],
  module: {
    loaders: []
  }
};
