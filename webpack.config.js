const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: ["./src/index.ts", "./src/style.css"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        loader: ExtractTextPlugin.extract("css-loader", "style-loader")
      },
    ]
  },
  resolve: {
    extensions: [".ts"]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      title: "Spreadsheet",
    })
  ]
};
