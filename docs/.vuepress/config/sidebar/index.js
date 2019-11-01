module.exports = Object.assign({}, {
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
        '404'
      ]
    },
    {
      title: '其他',
      collapsable: false,
      children: [
        'abstract',
        '0update1',
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
        'extractCode'
      ]
    }
  ]
})