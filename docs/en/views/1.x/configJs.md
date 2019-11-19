---
title: Config.js configuration
date: 2019-04-09
---

## Mobile optimization

On the mobile side, the search box zooms in when it gets focus, and can scroll left and right after losing focus, which can be optimized by setting the meta.

```javascript
// .vuepress/config.js
module.exports = {
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ]
}  
```

## Icon

You can use the theme's built-in icons in the navigation menu as follows:

```javascript
{ text: 'Tags', link: '/tags/', icon: 'reco-tag' }
```

本主题有以下内置图标供您选择

<icon-example></icon-example>

## Recording information and project start time

```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // record number
    record: '京ICP备17067634号-1',
    // project start time, only fill in the year
    startYear: '2017'
  }
}
```

## Set author name

1. Set the global author name

```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // author
    author: 'reco_luan'
  }
}
```

2. Set the author's name for a single article

```bash
---
title: You have not really worked hard, you easily lose to laziness
date: 2015-04-23
categories: article
author: 渡渡
---
```

## Support Huawei

The home page can display `华为，为中华而为之！`.

```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    huawei: true
  }
}
```

## Logo

The logo can be displayed on the left side of the navigation bar, and the following configuration is required.

```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/head.png'
  }
}
```