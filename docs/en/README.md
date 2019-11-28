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
- title: Yesterday
  details: Develop a vuepress blog theme that looks happy and writes smoothly.
- title: Today
  details: Help more people spend more time on content creation than on blogging.
- title: Tomorrow
  details: I hope more fans can get involved and help this theme grow better.
---

## Update Record [more+](/views/other/notice)

::: tip
**[2019-11-28]** 更新 `1.1.3`

1. 【修复】修复 html 代码没有当前页面文字内容的 bug [@橘子](https://github.com/smallsunnyfox) [@SigureMo](https://github.com/SigureMo)
2. 【修复】修复通过 URL 访问某个页面，锚点无法跳转的 bug [@橘子](https://github.com/smallsunnyfox) [@SigureMo](https://github.com/SigureMo)
3. 【修复】修复标签页切换标签时，阅读数量消失的 bug
4. 【修复】修复文章页退回列表页不能保分页记录的 bug
5. 【增加】信息栏增加友链配置 [文档](/views/1.x/home.md#_4-添加友链)
6. 【增加】增加列表的加载配置，默认异步加载 [文档](/views/1.x/valine.md)
7. 【增加】增加加密方式的配置 [文档](/views/1.x/password.md#绝对加密)
8. 【增加】增加文章置顶功能 [文档](/views/1.x/frontMatter.md#sticky)
9. 【增加】增加了几个图标 [文档](/views/1.x/configJs.md#图标)
10. 【优化】优化 `@vuepress-reco/vuepress-plugin-rss` 插件 [@SigureMo](https://github.com/SigureMo)
11. 【删除】`@vuepress-reco/vuepress-plugin-ga` 废弃，已经从主题移除，如需 GA 功能，请使用官方插件
:::

## Quick start

**npx**

```
npx @vuepress-reco/theme-cli init my-blog
```

**npm**

```bash
# init
npm install @vuepress-reco/theme-cli -g
theme-cli init my-blog

# install
cd my-blog
npm install

# run
npm run dev

# build
npm run build
```

**yarn**

```bash
# init
yarn global add @vuepress-reco/theme-cli
theme-cli init my-blog

# install
cd my-blog
yarn install
```

## Contributors

<Contributors user="vuepress-reco" repo="vuepress-theme-reco" :show-title="true"></Contributors>
<Contributors user="vuepress-reco" repo="vuepress-reco.github.io" :show-title="true"></Contributors>
