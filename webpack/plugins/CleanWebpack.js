const CleanWebpack = require('clean-webpack-plugin');

module.exports = function(path) {
  return {
    plugins: [
      new CleanWebpack(['components', 'img'], {
        root: path,
        verbose: true,
        dry: false,
      }),
    ],
  };
};
