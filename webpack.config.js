module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  entry: ['@babel/polyfill', __dirname + '/index.js'],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  devServer: {
    contentBase: __dirname + '/build',
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:3010"
      }
    }
  }
}
