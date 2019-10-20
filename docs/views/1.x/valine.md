---
title: 评论
date: 2019-04-09
---

## Introduce

主题内置评论插件 [@vuepress-reco/vuepress-plugin-comments](/views/plugins/)，可以根据自己的喜好选择 `Valine` 或者 `Vssue`。

::: warning
**浏览量** 仅在使用 `Valine` 时显示。
:::

## Option API

### Valine

```javscript
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

其他参数参考 [Valine 官网](https://valine.js.org/configuration.html)。

> 如果 valine 的获取评论的接口报 `404` 错误的话，不用担心，这是因为你还没有添加评论，只要存在1条评论，就不会报错了，这是 `leanCloud` 的请求处理操作而已。

### Vssue

```javscript
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

其他参数参考 [Vssue 官网](https://vssue.js.org/zh/options/)。