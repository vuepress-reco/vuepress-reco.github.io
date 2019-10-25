module.exports = [
  { text: 'Home', link: '/', icon: 'reco-home'},
  { text: 'Document', 
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
  { text: 'Blog', link: '/categories/blog/', icon: 'reco-blog'},
  { text: 'Examples', link: '/views/other/theme-example.html', icon: 'reco-category'},
  { text: 'Suggestion', link: '/views/other/question', icon: 'reco-suggestion' },
  { text: 'Notice', link: '/views/other/notice', icon: 'reco-tongzhi' },
  { text: 'Contact', 
    icon: 'reco-message',
    items: [
      { text: 'GitHub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco', icon: 'reco-github' },
      { text: '午后南杂', link: 'https://www.recoluan.com', icon: 'reco-other' },
      { text: 'WeChat', link: 'https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A', icon: 'reco-wechat' }
    ]
  }
]