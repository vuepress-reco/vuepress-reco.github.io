---
title: Comments
date: 2019-04-09
---

## Introduction

The theme's built-in comment plugin [@vuepress-reco/vuepress-plugin-comments](/views/plugins/) has two options: `Valine` or `Vssue`.

If you want to display comments only on certain pages instead of loading them by default, set `showComment: false` in `valineConfig` or `vssueConfig` and `isShowComments: true` on pages where you want to display comments.

If you don't want an article open for comments, you can set `isShowComments: false` in `front-matter`.

::: warning Page View
1. **Page view** is displayed only when using `Valine`.  
2. Because **views** need to call the relevant interface when the page loads, all the data of the list page will be loaded together. If the number of articles is large, it will affect the loading speed, so page view is removed in the article list after `1.2.0`.
:::

## Option API

### Valine

```javascript
module.exports = {
  theme: 'reco',
  themeConfig: {
    valineConfig: {
      appId: '...',// your appId
      appKey: '...', // your appKey
    }
  }  
}
```

Other parameters are referenced [Valine official website](https://valine.js.org/configuration.html).

> If valine's comment commenting interface is `404` error, don't worry, this is because you haven't added a comment yet, as long as there is 1 comment, you will not get an error. This is the request processing operation of `leanCloud`.

### Vssue

```javascript
module.exports = {
  theme: 'reco',
  themeConfig: {
    vssueConfig: {
      platform: 'github',
      owner: 'OWNER_OF_REPO',
      repo: 'NAME_OF_REPO',
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
    }
  }  
}
```

For other parameters please refer to the [official documentation of Vssue](https://vssue.js.org/options/).

### Internationalization

If you need to support different languages, you need to do this:

```js
// config.js
module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN'
    },
    '/en/': {
      lang: 'en-US'
    }
  }
  themeConfig: {
    locales: {
      '/': {
        valineConfig: {
          // ...
        }
      },
      '/en/': {
        valineConfig: {
          // ...
        }
      }
    }
  }
}
```

