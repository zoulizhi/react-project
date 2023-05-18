const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { getPath } = require("../utils/index");
module.exports = {
  // 入口配置
  entry: getPath("../src/index.js"),
  // 打包后文件信息
  output: {
    // 文件名
    filename: "[name].[contenthash:8].bundle.js",
    // 文件存放位置
    path: getPath("../build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    // 模板配置
    new HtmlWebpackPlugin({ template: getPath("../public/index.html") }),
    // 清空上一次打包的文件
    new CleanWebpackPlugin(),
  ],
};
