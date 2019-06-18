const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const assets = [ 'assets/images', 'assets/css', 'assets/fonts' ]; // asset directories

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".ttf", ".otf", ".eot", ".svg",'.woff']
  },
  module: {
    rules: require('./webpack.rules'),
  },
  plugins: assets.map(asset => {
    return new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src', asset),
        to: path.resolve(__dirname, '.webpack/renderer', asset)
      }
    ]);
  })
};
