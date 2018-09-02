const path = require("path");
const webpack = require("webpack");

const config = {
  devtool: "eval-source-map",
  entry: "./src/entry.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "src"),
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, "src"),
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /.svg$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
    port: 3000
  }
};

module.exports = config;
