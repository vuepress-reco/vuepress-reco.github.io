---
title: rss
date: 2019-11-06
---

## Introduce <GitHubLink repo="vuepress-reco/vuepress-plugin-rss"/>

RSS plugin only for vuepress-theme-reco.

### Name

- **As plugin**: `@vuepress-reco/vuepress-plugin-rss`


## Option API

### site_url

- required: `true`
- description: 网站地址
- example: `https://vuepress-theme-reco.recoluan.com`

### copyright

- required: `true`
- description: 版权
- example: `reco_luan 2019`

### filter

- required: `false`
- description: 博客的过滤器
- example: `(frontmatter) => { return [true|false] }`

### count

- required: `false`
- description: 显示多少篇博客
- example: `20`