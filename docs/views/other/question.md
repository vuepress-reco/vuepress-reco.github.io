---
title: FAQ
date: 2019-04-13
sidebar: 'auto'
---

::: tip
该主题几乎继承 `VuePress` 默认主题的一切功能，所以本文档只负责介绍该主题扩展的功能，如果你发现某些功能本网站没有相关文档，或者想要了解默认主题的一些功能，请移步 [官方文档](https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html)。
:::

## 1. 如何添加 `icon-font` ？

1. 将字体文件放在 `public` 文件夹下，然后在 `enhanceApp.js` 中引入字体文件中的css文件既可生效;
2. 如果你的 `icon` 完整的 `className` 是 `class="iconfont icon-myIcon"`，设置 `icon-font` 时应设置为 `{ text: '首页', link: '/', icon: 'iconfont icon-myIcon' }`。

## 2. 如何显示摘要？

文档中 `<!-- more -->` 以上部分会被当作摘要。

<RecoDemo :collapse="true">
<template slot="code-markdown">
  <<< @/docs/.vuepress/demo/abstract.md
</template>
</RecoDemo>

## 3. 首页页脚是否可以自定义？

不可以。

## 4. 首页右侧信息栏头像和导航栏左侧的图片分别怎么设置？

首页右侧信息栏头像可以通过在首页 `README.md` 文件中的 `front-matter` 中的 `faceImage` 来设置

``` yaml
---
heroImage: /hero.png
---
```

导航栏左侧的图片需要通过配置 `.vuepress/config.js` 中的 `themeConfig.logo`

``` javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/head.png'
  }
}
```

此外，你需要将你的图片放在 `.vuepress/public/` 中

## 5. 文章的存放位置有规定吗？

你可以将你的文章存放在任意位置，但是你需要保证它是 VuePress 可以解析的位置，比如你使用的命令是 `vuepress dev docs` ，那么请将所有文章存放在 `docs/` 中，但是主题并不会强制你放在哪个子目录，这个按照你的喜好来即可

> [详细的 VuePress 目录结构配置](https://vuepress.vuejs.org/zh/guide/directory-structure.html)

## 6. 侧边栏为什么不显示一级标题？

因为一级标题按照语义化就是文章的题目，按理说一篇文章只能存在一个题目，所以不会显示在侧边栏里，如果是写文章，请从二级标题开始

## 7. `1.1.0` 版本会在首页出现评论怎么解决？

该问题已经在 `1.1.1` 版本中得到解决。

## 8. 如何自定义评论区样式？

你可以通过样式覆盖来对评论区样式进行修改

不仅如此，VuePress 允许你在 `.vuepress/styles/index.styl` 为你的网站添加样式，你可以通过这个方式来修改主题内基本所有样式

> [VuePress 添加样式](https://vuepress.vuejs.org/zh/config/#index-styl)

## 9. 是否支持图片点击放大功能？

主题在 `1.1.1-alpha.2` 中已经将 `@vuepress/medium-zoom` 作为内置插件，支持文章内容中的图片点击放大功能，详情见[主题内置插件](../plugins/README.md#主题内置插件)
