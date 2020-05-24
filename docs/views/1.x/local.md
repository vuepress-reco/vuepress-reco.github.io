---
title: 多语言配置
date: 2019-03-24
---

::: warning
本主题的 blog 相关功能依赖 `@vuepress/plugin-blog`，因为某些原因，暂时无法对博客分类和标签进行多语言配置，所以多语言仅适合文档类型的项目。
:::

::: tip <Badge text="1.3.3+" />
`vuepress-theme-reco` 的多语言配置，是在站点多语言配置和默认主题多语言配置的基础上增加的额外配置，所以请先了解官方的 [多语言配置官方文档](https://v1.vuepress.vuejs.org/zh/guide/i18n.html#%E7%AB%99%E7%82%B9%E5%A4%9A%E8%AF%AD%E8%A8%80%E9%85%8D%E7%BD%AE)。**并且请注意，`vuepress` 的默认语言代码为 `en-US`**。
:::

## 网站支持的语言

|名称|语言代码|
|:-:|-|
|简中|`zh-CN`、`zh-SG`|
|繁中|`zh-HK`、`zh-MO`、`zh-TW`|
|日语|`ja-JP`|
|韩语|`ko-KR`|
|英语|`en-US` 及其他|

## 如果网站只有一种语言

### 修改默认语言代码

`vuepress` 的默认语言代码为 `en-US`，如果我们需要改成简体中文，需要通过站点多语言配置来修改：

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

### 修改默认语言配置

如果你觉得主题内置的术语不符合你的喜好，你可以这样修改：

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
            article: '美文', // 默认 文章
            tag: '标识', // 默认 标签
            category: '类别', // 默认 分类
            friendLink: '友链' // 默认 友情链接
          },
          pagation: {
            prev: '上一页',
            next: '下一页',
            go: '前往',
            jump: '跳转至'
          }
        }
      }
    }
  }
}
```

## 如果你的网站有多种语言

上面的语法同样适用：

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
