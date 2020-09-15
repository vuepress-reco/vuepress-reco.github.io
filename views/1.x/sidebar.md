---
title: 侧边栏
date: 2019-10-25
author: 橘子
---

:::warning
从 `1.5.6` 之后，主题将原有的侧边栏的中的多级标题移出，生成子侧边栏，放在页面的右侧。左边的侧边栏只有在自定义的侧边栏时才会出现，用于展示多篇文章的集合，而子侧边栏专注于当前文章的多级标题。
:::

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
