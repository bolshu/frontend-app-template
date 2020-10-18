const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_PATH = path.resolve(__dirname, 'dist');

const DEV_SERVER = {
  contentBase: DIST_PATH,
  compress: true,
  port: 9000,
};

const miniCssExtractPluginConf = {
  filename: 'style.css',
};

const htmlWebpackPluginConf = {
  title: 'Frontend app template', // change me
};

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: DIST_PATH,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(s[ac]|c)?ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  devServer: DEV_SERVER,
  plugins: [
    new MiniCssExtractPlugin(miniCssExtractPluginConf),
    new HtmlWebpackPlugin(htmlWebpackPluginConf),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};
