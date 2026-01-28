// vue.config.js
const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  chainWebpack: config => {
    // This helps with case sensitivity issues
    config.plugin('case-sensitive-paths').use(require('case-sensitive-paths-webpack-plugin'));
  }
};