---
title: Config.js configuration
date: 2019-04-09
---

## Mobile Optimization

On a mobile device, the search box can be zoomed in when focused, and scrolled left or right when not focused. This can be done by setting the meta.

```javascript
// .vuepress/config.js
module.exports = {
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ]
}  
```

## Icon

You can use the theme's built-in icons in the navigation bar as follows:

```javascript
{ text: 'Tags', link: '/tags/', icon: 'reco-tag' }
```

本主题有以下内置图标供您选择

<icon-example></icon-example>

## Recording information and project start time

> The ICP record link and the Ministry of Public Security record will become effective after `1.2.0`.

```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
     // record
     record: 'ICP Filing Copy',
     recordLink: 'ICP record link',
     cyberSecurityRecord: 'Recorded by the Ministry of Public Security',
     cyberSecurityLink: 'The Ministry of Public Security record link',
     // Project start time, only year
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
title: You Haven't Really Worked Hard before You Yield to Laziness
date: 2015-04-23
categories: article
author: Dudu
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