---
title: medium-zoom
date: 2019-11-02
author: 在所不辞
---

## Introduce <GitHubLink repo="vuepress-reco/vuepress-plugin-medium-zoom/"/>

> [medium-zoom](https://github.com/francoischalifour/medium-zoom) plugin

## 安装

```bash
yarn add -D @vuepress/plugin-medium-zoom@next
# OR npm install -D @vuepress/plugin-medium-zoom@next
```

## 使用方法

```javascript
module.exports = {
  plugins: [
    ['@vuepress/medium-zoom', {
      selector: 'p > img'
    }]
  ]
}
```

## Options

### selector

- Type: `string`
- Default: `.theme-reco-content :not(a) > img`

### options

- Type: `object`
- Default: `undefined`

[Options](https://github.com/francoischalifour/medium-zoom#options) for [medium-zoom](https://github.com/francoischalifour/medium-zoom).



## About

- vuepress 官方文档: [@plugin-medium-zoom](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html#usage)

