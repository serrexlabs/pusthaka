const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".ttf", ".otf", ".eot", ".svg", ".woff"],
  },
  module: {
    rules: require("./webpack.rules"),
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/public/assets/js/pdf.worker.js"),
        to: path.resolve(__dirname, ".webpack/renderer/main_window/index.worker.js"),
      },
    ]),
  ],
};
