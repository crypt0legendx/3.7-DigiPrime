const { PATHS } = require('../settings');

module.exports = {
  plugins: [
    require('postcss-preset-env')(),
    require('postcss-import')({ root: PATHS.root }),
    require('autoprefixer'),
  ],
}
