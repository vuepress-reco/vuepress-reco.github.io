module.exports = {
  'zh': Object.assign({}, {
    '/views/1.x/': [
      {
        title: '基础',
        collapsable: false,
        children: [
          '',
          'installUse',
          'blog',
          'frontMatter'
        ]
      },
      {
        title: '进阶',
        collapsable: false,
        children: [
          'timeline',
          'valine',
          'password',
          'configJs',
          'home',
          'themePicker',
          'ga',
          'notfound',
          'mode'
        ]
      },
      {
        title: '默认主题配置',
        collapsable: false,
        children: [
          'abstract',
          'syntax',
          'customStyleAndScript',
          'sidebar'
        ]
      },
      {
        title: '其他',
        collapsable: false,
        children: [
          'updatetoone',
          'recommend'
        ]
      }
    ],
    '/views/0.x/': [
      {
        title: '基础',
        collapsable: false,
        children: [
          '',
          'installUse',
          'category',
          'tag',
        ]
      },
      {
        title: '进阶',
        collapsable: false,
        children: [
          'timeline',
          'valine',
          'password',
          'configJs',
          'home'
        ]
      },
      {
        title: '其他',
        collapsable: false,
        children: [
          'abstract',
        ]
      }
    ],
    '/views/plugins/': [
      {
        title: '插件',
        collapsable: true,
        children: [
          '',
          'backToTop',
          'pagation',
          'screenfull',
          'loadingPage',
          'ga',
          'kanbanniang',
          'comments',
          'extractCode',
          'rss',
          'bgmPlayer'
        ]
      }
    ]
  }),
  'en': Object.assign({}, {
    '/en/views/1.x/': [
      {
        title: 'Basic',
        collapsable: false,
        children: [
          '',
          'installUse',
          'blog',
          'frontMatter'
        ]
      },
      {
        title: 'Advanced',
        collapsable: false,
        children: [
          'timeline',
          'valine',
          'password',
          'configJs',
          'home',
          'themePicker',
          'ga',
          'notfound',
          'mode'
        ]
      },
      {
        title: 'Default Theme Config',
        collapsable: false,
        children: [
          'abstract',
          'syntax',
          'customStyleAndScript',
          'sidebar'
        ]
      },
      {
        title: 'Other',
        collapsable: false,
        children: [
          'updatetoone',
          'recommend'
        ]
      }
    ],
    '/en/views/plugins/': [
      {
        title: 'Plugins',
        collapsable: true,
        children: [
          '',
          'backToTop',
          'pagation',
          'screenfull',
          'loadingPage',
          'ga',
          'kanbanniang',
          'comments',
          'extractCode',
          'rss',
          'bgmPlayer'
        ]
      }
    ]
  })
}