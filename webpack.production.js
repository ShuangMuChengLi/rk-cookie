let path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: {
    index: './src',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    library: "rkCookie",
    libraryTarget: 'umd'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  mode: 'development',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: { /* Loader options go here */ }
          }
        ]
      },
      {test: /\.js$/, enforce: 'pre', loader: 'source-map-loader'},
      {test: /\.tsx?$/, loader: 'ts-loader'}
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),

  ],
};
