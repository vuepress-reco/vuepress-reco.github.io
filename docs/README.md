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
**[2019-11-28]** 更新 `1.1.2`

1. 【修复】修复 html 代码没有当前页面文字内容的 bug [@橘子](https://github.com/smallsunnyfox) [@SigureMo](https://github.com/SigureMo)
2. 【修复】修复通过 URL 访问某个页面，锚点无法跳转的 bug [@橘子](https://github.com/smallsunnyfox) [@SigureMo](https://github.com/SigureMo)
3. 【修复】修复标签页切换标签时，阅读数量消失的 bug
4. 【增加】信息栏增加友链配置 [文档](/views/1.x/home.md#_4-添加友链)
5. 【增加】增加列表的加载配置，默认异步加载 [文档](/views/1.x/valine.md)
6. 【增加】增加加密方式的配置 [文档](/views/1.x/password.md#绝对加密)
7. 【增加】增加文章置顶功能 [文档](/views/1.x/frontMatter.md#sticky)
8. 【增加】增加了几个图标 [文档](/views/1.x/configJs.md#图标)
9. 【优化】优化 `@vuepress-reco/vuepress-plugin-rss` 插件 [@SigureMo](https://github.com/SigureMo)
10. 【删除】`@vuepress-reco/vuepress-plugin-ga` 废弃，已经从主题移除，如需 GA 功能，请使用官方插件
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
