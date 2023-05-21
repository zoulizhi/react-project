const path = require("path");
const { getPath } = require("../utils/index");
const { merge } = require("webpack-merge");
const baseConfig = require("./base");
module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "cheap-source-map",

  plugins: [],
  optimization: {
    chunkIds: "named",
    runtimeChunk: {
      name: "runtime/runtime",
    },
    splitChunks: {
      chunks: "all",
      // 拆分包的大小，至少为minSize
      minSize: 20000,
      // 将大于maxSize的包拆分成不小于minSize的包
      maxSize: 40000,
      // 包至少被引入的次数
      minChunks: 2,
      // 最大的异步请求数量
      maxAsyncRequests: 30,
      // 对拆分的包进行分组，一个包被拆分后不会立刻打包，等到有其他符合规则的包一起打包
      // cacheGroups: {
      //   venders: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10,
      //     filename: "[id]_[hash:6]_vender.js",
      //   },
      // },
    },
  },
});
