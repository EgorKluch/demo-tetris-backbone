var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/app/app.js",
  output: {
    path: __dirname + '/build',
    filename: "js/app.js"
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.twig$/,
      loader: "twig-loader"
    }]
  },

  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new HtmlWebpackPlugin({
      template: '!!handlebars!src/app/tpl/index.hbs'
    })
  ]
};
