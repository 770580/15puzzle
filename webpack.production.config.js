var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader',
      },
      {
        loader: 'babel-loader',
        test: /\.js?$/,
        include: path.resolve(__dirname, 'src'),
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0'],
        },
      },
    ],
  },
};
