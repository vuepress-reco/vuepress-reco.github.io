---
title: 侧边栏
date: 2019-10-25
author: 橘子
---

:::warning
从 `1.5.6` 之后，主题将原有的侧边栏的中的多级标题移出，生成子侧边栏，放在页面的右侧。左边的侧边栏只有在自定义的侧边栏时才会出现，用于展示多篇文章的集合，而子侧边栏专注于当前文章的多级标题。
:::

## 说明

首先，主题已经将某篇文章的侧边栏抽离出来放在右边，被称为「子侧边栏」；左边的侧边栏的仅会在自定义侧边栏时显示，它所显示的知识文章的分类和目录，我们称它为「原侧边栏」。

其次，关于侧边栏的配置如下：

- 对于「原侧边栏」，只能通过自定义侧边栏实现，无法通过Front Matter中的`sidebar`与`subSidebar`配置显示与否。
- 对于「子侧边栏」，可通过配置`config.js`配置全局开启与关闭，也可以通过Front Matter中的`subSidebar`定义每篇文章中的开启与关闭。
- 对于Front Matter中的`sidebar`属性，在本主题中没有任何用处。

## 子侧边栏是否打开

建议全局打开自动子侧边栏功能

```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    subSidebar: 'auto'//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
  }
}
```

然后通过 `YAML front matter` 来禁用指定页面的侧边栏

```yaml
---
subSidebar: false
---
```
