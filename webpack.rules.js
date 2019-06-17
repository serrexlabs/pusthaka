module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|.webpack)/,
    use: 'awesome-typescript-loader'
  },
  {
    test: /\.js?$/,
    exclude: /(node_modules|.webpack)/,
    use: 'babel-loader'
  },
  {
    test: /\.(css)$/,
    exclude: /(node_modules|.webpack)/,
    use: ['style-loader', 'css-loader']
  },
  {
    enforce: "pre",
    test: /\.js$/,
    use: "source-map-loader"
  }
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
