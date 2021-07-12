const themeConfig = require('./themeConfig')

module.exports = {
  title: "Autumn Sprint",
  description: '秋招面试题库',
  base: '/sprint/',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: [
    'flowchart',
    '@vuepress-reco/vuepress-plugin-pagation',
    'permalink-pinyin'
  ] 
}  