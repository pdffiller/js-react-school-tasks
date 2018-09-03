const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    bundle: './src',
  },
  output: {
    filename: '[name].js',
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../',
          },
        },
        { loader: 'css-loader' },
      ],
    }],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      chunks: ['bundle'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],

  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
};
