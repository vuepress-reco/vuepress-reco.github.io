---
title: 添加分类和标签
date: 2019-04-09
---

## 添加博客配置
    
```javscript
// change /docs/.vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
     // 博客设置
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      }
    }
  }  
}  
```

## 写文章时添加分类和标签

```
--- 
title: 【vue】跨域解决方案之proxyTable  
date: 2017-12-28
categories: 
 - frontEnd
tags: 
 - vue
---

> 请注意， `categories` 和 `categories` 要以数组的方式填写。


某些页面的侧边栏为 `false` 呢？因为您启用了分类，这与自定义侧边栏功能有点冲突，所以您全局打开自动侧边栏功能，然后在不需要侧标记的地方关闭它。