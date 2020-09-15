---
title: Sidebar
date: 2019-10-25
author: 橘子
---

:::warning
After '1.5.6', the theme removes the multilevel title from the original sidebar, creating a sub-sidebar that is placed on the right side of the page. The left sidebar appears only when there is a custom sidebar that displays a collection of articles, while the sub-sidebar focuses on the current article's multiple levels of titles.
:::

## Whether Enable the sub-sidebar

It's recommended to globally enable the sub-sidebar:

```javascript
// .vuepress/config.js

module.exports = {
  themeConfig: {
    subSidebar: 'auto' //auto generate sidebar in all pages, 原 sidebar 仍然兼容
  }
}
```

Then use `YAML front matter` to disable sub-sidebar on specific pages:

```yaml
---
subSidebar: false
---
```
