module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: __dirname + '/build/js',
    filename: "index.js"
  },
  module: {
    loaders: []
  }
};
