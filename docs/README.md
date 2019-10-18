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

::: tip
**[2019-09-01]** 更新 `1.0.8-alpha.3`

1. 【调整】在 `GitHub` 成立 `vuepress-reco`，此后主题相关内容将全部发布在其名下
1. 【修复】切换颜色后，navbar 的颜色高亮错误
2. 【修复】时间轴的日期显示 `NaN`
3. 【修复】非根域名下，博客风格首页的 banner 显示错误
4. 【修复】文章条目的标签按钮跳转不显示当前标签的内容
5. 【优化】加密页的动画效果
6. 【优化】分类页面分类按钮的点击事件触发范围，原来只有点击文字才可以跳转
7. 【增加】颜色板支持自定义 [文档](/views/1.x/themePicker.html#自定义颜色)
8. 【增加】加载页
9. 【增加】导航栏增加全屏按钮（仅PC有效）
10. 【删除】夜色模式
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

