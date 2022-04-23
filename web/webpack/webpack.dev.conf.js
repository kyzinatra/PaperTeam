/** @format */
const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf.js");

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  entry: {
    app: path.join(__dirname, "../src") + "/index.tsx",
  },
  output: {
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "../public"),
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
});

module.exports = Promise.resolve(devWebpackConfig);
