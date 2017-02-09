var path = require('path');

module.exports = {
  plugins: [
    require('postcss-import')({
      root: __dirname,
      path: [path.join(__dirname, './components')]
    }),
    require('postcss-mixins')(),
    require('postcss-each')(),
    require('postcss-cssnext')(),
    require('postcss-reporter')({ clearMessages: true })
  ]
};