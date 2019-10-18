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
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home'},
      { text: 'API', 
        icon: 'reco-api',
        items: [
          { text: '1.x', link: '/views/1.x/' },
          { text: '0.x', link: '/views/0.x/' }
        ]
      },
      { text: 'Plugins', 
        icon: 'reco-three',
        link: '/views/plugins/'
      },
      { text: 'Blog', link: '/categories/blog/', icon: 'reco-blog'},
      { text: 'Examples', link: '/views/other/theme-example.html', icon: 'reco-category'},
      { text: 'Suggestion', link: '/views/other/question', icon: 'reco-suggestion' },
      { text: 'Notice', link: '/views/other/notice', icon: 'reco-tongzhi' },
      { text: 'Conntect', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco', icon: 'reco-github' },
          { text: '午后南杂', link: 'https://www.recoluan.com', icon: 'reco-other' },
          { text: 'WeChat', link: 'https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A', icon: 'reco-wechat' }
        ]
      }
    ],
    sidebar: {
      '/views/1.x/': [
        {
          title: '基础',
          collapsable: false,
          children: [
            '',
            'installUse',
            'blog'
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
            'themePicker'
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
            'comments'
          ]
        }
      ]
    },
    logo: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated', // string | boolean
    // 作者
    author: 'reco_luan',
    // 备案号
    record: '京ICP备17067634号-1',
    // 项目开始时间
    startYear: '2017',
    // valine 设置
    // valineConfig: {
    //   appId: 'jvc9s4BkJYQNOcpsbVTPMePe-gzGzoHsz',
    //   appKey: 'Js91M9DfM9vPwVaUj7xdkbxh',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   notify: true,
    //   recordIP: true
    // },
    vssueConfig: {
      title: 'vuepress-theme-reco',
      platform: 'github',
      owner: 'recoluan',
      repo: 'AGStore-comments',
      clientId: '09037a4ffddaeef6652e',
      clientSecret: 'db1f7582492fb52487b4a935cbddb683272507ef',
    },
    GAID: 'UA-149716079-1'
  },
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  