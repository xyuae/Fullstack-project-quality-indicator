var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/client/src/index.js',
  output: {
    path: __dirname + '/client/dist/assets',
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  module: {
    loaders: [
     {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['latest', 'stage-0', 'react']
      }
    },
     {
      test: /\.json$/,
      exclude: /(node_modules)/,
      loader: 'json-loader'
    },
     {
      test: /\.css$/,
      loader: 'style-loader!css-loader!autoprefixer-loader'
    },
     {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
    }
    ]
  }
};
