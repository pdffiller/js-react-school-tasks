const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: 'bundle.[hash].js',
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],

  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
};
