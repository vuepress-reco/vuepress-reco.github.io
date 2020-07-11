---
title: Sidebar
date: 2019-10-25
author: 橘子
---

## Whether Enable the Sidebar

It's recommended to globally enable the sidebar:

```javascript
// .vuepress/config.js

module.exports = {
  themeConfig: {
    sidebar: 'auto'//auto generate sidebar in all pages
  }
}
```

Then use `YAML front matter` to disable sidebar on specific pages:

```yaml
---
sidebar: false
---
```

## Sidebar Depth

> By default, the sidebar is auto generated based on headers of current page and indents according to blog structure. You could use `themeConfig.sidebarDepth` to modify the behaviors. By default the depth is `1` and extracts headers down to `h2`. You could set it to `0` to disable headers, or to `2` to extract both `h2` and `h3` headers.
> You could also use `YAML front matter` to set the depth for specific pages

```yaml
---
sidebarDepth: 2
---
```

## [More sidebar configs](https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar)