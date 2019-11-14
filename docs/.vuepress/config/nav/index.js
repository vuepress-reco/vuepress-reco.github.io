module.exports = [
  { text: 'Documents', 
    icon: 'reco-api',
    items: [
      { 
        text: 'Theme', items: [
          { text: '1.x', link: '/views/1.x/' },
          { text: '0.x', link: '/views/0.x/' }
        ],
      },
      {
        text: 'Plugin', items: [
          { text: 'plugin', link: '/views/plugins/' }
        ]
      }
    ]
  },
  { text: 'FAQ', link: '/views/other/question', icon: 'reco-suggestion' },
  { text: 'Blog', link: '/categories/blog/', icon: 'reco-blog'},
  { text: 'Examples', link: '/views/other/theme-example.html', icon: 'reco-category'},
  { text: 'RSS', link: 'https://vuepress-theme-reco.recoluan.com/rss.xml', icon: 'reco-rss'},
  { text: 'GitHub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco', icon: 'reco-github'},
]