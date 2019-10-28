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

## [Update Record](/views/other/notice)

::: tip
**[2019-10-20]** 更新 `1.1.0`

1. 【增加】首页右侧信息栏悬浮 [@橘子](https://github.com/smallsunnyfox)
2. 【增加】首页增加分页
3. 【增加】首页和标签页的标签列表增加全部按钮
4. 【增加】增加腾讯 404 公益页面 [文档](/views/1.x/404.md)
5. 【增加】自定义首页 [文档](/views/1.x/home.md#option-api)
6. 【增加】文章发布状态 [文档](/views/1.x/frontMatter.md#publish)
7. 【修复】文章时间可以填写 `时分秒` [@TankRyze](https://github.com/TankRyze)
8. 【修复】修复回到顶部按钮动画
9. 【修复】修复博客风格首页的信息栏的宽度问题
10. 【修复】修复第一次进入某篇加密文章，加密失效的 bug [@橘子](https://github.com/smallsunnyfox)
11. 【重构】使用最新（重构）的 `@vuepress-reco/plugin-blog` 实现分类和标签
12. 【重构】重构时间轴，精简用户配置 [文档](/views/1.x/timeline.md)
13. 【插件】封装评论插件
14. 【插件】封装 `Google Analytic` 插件
15. 【插件】封装分页插件
16. 【插件】封装加载页插件
17. 【插件】封装封装全屏功能插件
18. 【插件】封装看板娘插件 [@橘子](https://github.com/smallsunnyfox)
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

