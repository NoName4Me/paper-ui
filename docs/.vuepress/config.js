module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      '/',
      '/demo/',
      ['/demo/', 'Explicit link text']
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {

      }
    }
  }
}