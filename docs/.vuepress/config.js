const themeConfig = require('./config/theme/')

module.exports = {
  title: "vuepress-theme-reco",
  description: 'A simple and beautiful vuepress blog theme.',
  dest: 'public',
  // base: '/vuepress-theme-reco-doc/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['flowchart'] 
}  