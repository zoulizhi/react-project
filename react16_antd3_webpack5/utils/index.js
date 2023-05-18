const path = require("path");
const getPath = (target) => {
  return path.resolve(__dirname, target);
};

module.exports = { getPath };
