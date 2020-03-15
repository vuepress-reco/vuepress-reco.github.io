---
home: true
heroImage: /icon_vuepress_reco.png
heroImageStyle: {
  maxWidth: '200px',
  width: '100%',
  display: block,
  margin: '5rem auto 2rem',
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
**[2020-03-15]** 更新 `1.3.0`

1. 【修复】详情页评论块无加载动画
2. 【修复】刷新按钮的暗色适配
3. 【增加】增加容器 `right`, `theorem`, `details` [文档](/views/1.x/syntax.html#容器) [@franklinqin0](https://github.com/franklinqin0)
4. 【增加】增加 tagline（首页的描述）并可以通过 null 来关闭 [文档](https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)
5. 【增加】增加暗色模式初始化配置 [文档](/views/1.x/mode.html#初始化)
6. 【重构】密码需要再设置中设置 `MD5` 加密后的32位密文 [文档](/views/1.x/password.html#设置密文)
7. 【重构】滚动条样式
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
