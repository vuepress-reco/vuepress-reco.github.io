---
title: Multiple code themes
date: 2020-07-05
---

::: danger 注意
自 `1.6.10` 废弃。
:::

## Theme style

Go to [prismjs](https://prismjs.com/).

## Set the theme

```js
// .vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    /**
     * support for
     * 'default'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     */
    codeTheme: 'tomorrow' // default 'tomorrow'
  }
}
```
