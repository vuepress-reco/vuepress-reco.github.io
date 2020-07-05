---
title: Multiple code themes
date: 2020-07-05
---

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
     * 'coy'
     * 'dark'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     * 'twilight'
     */
    codeTheme: 'tomorrow' // default 'tomorrow'
  }
}
```
