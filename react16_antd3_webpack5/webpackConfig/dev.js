const path = require("path");
const { getPath } = require("../utils/index");
const { merge } = require("webpack-merge");
const baseConfig = require("./base");
module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "cheap-source-map",

  plugins: [],
});
