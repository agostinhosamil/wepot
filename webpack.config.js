const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
  mode: "development",
  entry: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    library: "default",
    libraryTarget: "umd"
  },

  resolve: { extensions: [".js", ".json"] },

  module: {
    rules: [
      { test: /\.(js)x?$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, "public", "index.html")
    })
  ]
};

module.exports = () => config;
