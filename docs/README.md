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

<Contributors></Contributors>
