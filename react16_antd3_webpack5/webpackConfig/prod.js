const baseConfig = require("./base");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { getPath } = require("../utils/index");

const { merge } = require("webpack-merge");

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    // 模板配置
    // new HtmlWebpackPlugin({
    //   template: getPath("../public/index.html"),
    //   //html文件中代码的压缩
    //   minify: {
    //     collapseWhitespace: true, //折叠空格
    //     removeComments: true, //删除注释
    //     removeRedundantAttributes: true, //移除多余属性
    //     removeEmptyAttributes: true, //移除空属性
    //     keepClosingSlash: true, //是否保持单元素的尾部
    //   },
    // }),
  ],
});
