const path = require('path');
module.exports = {
  base: process.env.NODE_ENV === 'production' ? '/solutions/paper-ui/' : '/',
  title: 'Paper UI',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true,
    lastUpdated: true,
    // sidebar: 'auto',
    sidebar: {
      '/guide/': [
        {
          title: '基础组件',
          children: ['basic/notice', 'basic/button', 'basic/input']
        },
        {
          title: '高级'
        }
      ]
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' }
    ]
  },
  chainWebpack: (config, isServer) => {
    config.resolve.extensions
      .add('.ts')
      .end()
      .alias.set('$paper-ui', path.resolve(__dirname, '../../src'))
      .set('@', path.resolve(__dirname, '../../src'));

    config.module
      .rule('ts')
      .test(/\.ts$/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('ts-loader')
      .loader('ts-loader')
      .options({
        transpileOnly: true,
        appendTsSuffixTo: ['\\.vue$'],
        happyPackMode: false
      })
      .end();
  }
};