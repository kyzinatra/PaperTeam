/** @format */

const fs = require("fs");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "../src"),
  public: path.join(__dirname, "../public"),
  assets: "assets/",
};

const PAGES_DIR = `${PATHS.src}/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith(".html"));

module.exports = {
  output: {
    filename: `${PATHS.assets}js/[name].[contenthash:5].js`,
    chunkFilename: `${PATHS.assets}js/[name].[contenthash:5].js`,
    path: PATHS.public,
  },

  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/i,
          name(module) {
            const name = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${name.replace("@", "")}`;
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js(x)?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-object-rest-spread"],
        },

        exclude: /node_modules/,
      },

      {
        test: /\.(png|jp[2g]|webp|tiff|jfif|jpeg(2000)?|ico|bem|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
      {
        test: /\.(s[ac]|le)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { modules: true } },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  require("cssnano")({
                    preset: "default",
                  }),
                  require("autoprefixer"),
                ],
              },
            },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...PAGES.map(
      page =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page}`,
        })
    ),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}/css/styles.css`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        // { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
        { from: `${PATHS.src}/static`, to: "./" },
      ],
    }),
  ],
};
