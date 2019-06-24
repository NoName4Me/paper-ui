const path = require('path')

module.exports = {
  lintOnSave: false,
  css: { extract: false },
  productionSourceMap: false,
  // chainWebpack: (config, isServer) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'));
  // }
}
