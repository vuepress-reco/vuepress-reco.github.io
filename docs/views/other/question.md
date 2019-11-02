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
