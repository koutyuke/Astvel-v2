/** @type {import('postcss-load-config').Config} */
const baseConfig = require("@astvel/postcss/base.js");
module.exports = {
  ...baseConfig,
  plugins: {
    ...baseConfig.plugins,
    "@pandacss/dev/postcss": {},
  },
};
