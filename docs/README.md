---
home: true
heroImage: /icon_vuepress_reco.png
heroImageStyle: {
  maxWidth: '200px',
  width: '100%',
  display: block,
  margin: '5rem auto 2rem',
  background: '#fff',
  borderRadius: '1rem',
}
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
features:
- title: 过去
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题。
- title: 当下
  details: 帮助更多的朋友节省时间去用心书写内容，而不是仅仅配置一个博客去孤芳自赏。
- title: 未来
  details: 吸引更多的朋友参与到开发中来，继续强大功能。
---

## 更新记录 [更多+](/views/other/notice)

::: tip
**[2019-11-03]** 更新 `1.1.1`

1. 【修复】首页出现评论框
2. 【修复】文章列表出现无用数据
3. 【修复】修复文章加密页小 bug
4. 【修复】修复 IOS 时间显示不正确的 bug
5. 【修复】修复 `publish: false` 的文章在标签页显示的 bug [@SigureMo](https://github.com/SigureMo)
6. 【修复】修复 `@vuepress/plugin-medium-zoom` 无效的 bug [@SigureMo](https://github.com/SigureMo)
7. 【修复】修复 `vssue` 在切换页面时不刷新的 bug [@SigureMo](https://github.com/SigureMo)
8.  【插件】板娘插件优化 [@橘子](https://github.com/smallsunnyfox)
9.  【插件】增加代码分栏插件 [文档](/views/plugins/extractCode.md)
:::

## 快速开始

**npx**

```
npx @vuepress-reco/theme-cli init my-blog
```

**npm**

```bash
# 初始化
npm install @vuepress-reco/theme-cli -g
theme-cli init my-blog

# 安装
cd my-blog
npm install

# 运行
npm run dev

# 编译
npm run build
```

**yarn**

```bash
# 初始化
yarn global add @vuepress-reco/theme-cli
theme-cli init my-blog

# 安装
cd my-blog
yarn install
```

## 贡献者

<Contributors user="vuepress-reco" repo="vuepress-theme-reco" :show-title="true"></Contributors>
<Contributors user="vuepress-reco" repo="vuepress-reco.github.io" :show-title="true"></Contributors>
