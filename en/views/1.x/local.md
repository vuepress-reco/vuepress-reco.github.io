---
title: Internationalization
date: 2019-03-24
---

::: warning
The blog-related functionality of this topic relies on `@vuepress/plugin-blog`, and for some reason, it is not possible to multilingual configure blog categories and tags, so multilingual is only suitable for document-type projects.
:::

::: tip <Badge text="1.3.3+" />
The internationalization configuration of `vuepress-theme-reco` is an additional configuration on top of the site's multilingual configuration and the default theme multilingual configuration. So check out [the official multilingual configuration documentation](https://v1.vuepress.vuejs.org/guide/i18n.html) first. **And please note that the default language code for `vuepress` is `en-US`.**
:::

## multi-language

|language|language code|
|:-:|-|
|Simplified Chinese|`zh-CN`、`zh-SG`|
|Traditional Chinese|`zh-HK`、`zh-MO`、`zh-TW`|
|Japanese|`ja-JP`|
|Korean|`ko-KR`|
|English|`en-US` and other|

## Only one language

### Modify the default language code

The default language code of `vuepress` is `en-US`. If we need to change it to simplified Chinese, we need to modify it through the site's multi-language configuration:

```js{5}
// config.js
module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  }
}
```

### Modify the default language configuration

If you feel that the terms in the theme are not to your liking, you can modify them by:

```js{11,12,13,14,15,16,17,18,19,20,21,22,23,24}
// config.js
module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        recoLocales: {
          homeBlog: {
            article: 'Article',
            tag: 'Tag',
            category: 'Category',
            friendLink: 'Friend Link'
          },
          pagation: {
            prev: 'Prev',
            next: 'Next',
            go: 'Go',
            jump: 'Jump To'
          }
        }
      }
    }
  }
}
```

## More than one language

The same syntax applies:

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
        recoLocales: {
          homeBlog: {
            // ...
          },
          pagation: {
            // ...
          }
        }
      },
      '/en/': {
        recoLocales: {
          homeBlog: {
            // ...
          },
          pagation: {
            // ...
          }
        }
      }
    }
  }
}
```
