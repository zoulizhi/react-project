const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { getPath } = require("../utils/index");
module.exports = {
  // 入口配置
  entry: getPath("../src/index.js"),
  // 打包后文件信息
  output: {
    // 文件名
    filename: "[name].bundle.js",
    // 文件存放位置
    path: getPath("../build"),
    chunkFilename: "chunk_[id]_[name].js",
  },

  resolve: {
    extensions: [".js", ".jsx", ".tsx"],
    alias: {
      component: "../src/component",
      reduce: "../src/reduce",
      container: "../src/container",
      action: "../src/action",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "css-loader",
          "postcss-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
        exclude: /node_modules/,
      },
      /**
       * 打包图片资源，小图片转成base64之后可以和页面一起被请求，减少不必要的请求过程
       */
      {
        test: /\.(png|svg|jpg|jpge|gif)$/i,
        type: "asset",
        generator: {
          filename: "img/[name].[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
      /**
       * 字体的打包
       */
      {
        test: /\.(woff2?|eot|ttf)$/i,
        type: "asset/resource",
        generator: {
          filename: "font/[name].[hash:6][ext]",
        },
      },
      {
        test: /\.(js|jsx|tsx|ts)$/i,
        use: {
          loader: "babel-loader",
          options:{
            comments:false
          }
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // 模板配置
    new HtmlWebpackPlugin({
      template: getPath("../public/index.html"),
    }),
    // 清空上一次打包的文件
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ],
};
