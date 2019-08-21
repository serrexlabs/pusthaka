module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: "node-loader",
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: "@marshallofsound/webpack-asset-relocator-loader",
      options: {
        outputAssetBase: "native_modules",
      },
    },
  },
  {
    test: /\.(js)$/,
    exclude: /(node_modules|.webpack)/,
    use: "babel-loader",
  },
  {
    test: /.(tsx|ts)$/,
    exclude: /(node_modules|.webpack)/,
    loaders: ["awesome-typescript-loader"],
  },
  {
    test: /\.(css)$/,
    exclude: /(node_modules|.webpack)/,
    use: ["style-loader", "css-loader"],
  },
  {
    test: /\.(scss)$/,
    exclude: /(node_modules|.webpack)/,
    use: ["style-loader", "css-loader", "sass-loader"],
  },
  {
    test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    exclude: /(node_modules|.webpack)/,
    use: ["file-loader"],
  },

  // Put your webpack loader rules in this array.  This is where you would put
  // your ts-loader configuration for instance:
  /**
   * Typescript Example:
   *
   * {
   *   test: /\.tsx?$/,
   *   exclude: /(node_modules|.webpack)/,
   *   loaders: [{
   *     loader: 'ts-loader',
   *     options: {
   *       transpileOnly: true
   *     }
   *   }]
   * }
   */
];
