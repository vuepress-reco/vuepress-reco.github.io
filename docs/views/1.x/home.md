---
title: 首页配置
date: 2019-04-09
---

## Introduce

:::tip
主题的主页的默认风格偏文档，并不像一个博客，所以从 `vuepress-theme-reco@1.0.0-alpha.25` 开始，增加博客风格首页布局。
:::

## Option API

### Home
![home.png](../images/1.png)

1. 如果您的heroImage具有您的网站标题，则可能需要设置值 `isShowTitleInHome` `false` 以使标题不显示。

```bash
# this is your homepage

---
home: true
heroImage: /hero.png
isShowTitleInHome: false
---
```

2. 如果你想改变heroImage的风格，你可以设置值 `heroImageStyle` 来实现你想要的效果

```bash
# 这是你的主页 

---
home: true
heroImage: /hero.png
heroImageStyle: {
  maxHeight: '200px',
  display: block,
  margin: '6rem auto 1.5rem',
  borderRadius: '50%',
  boxShadow: '0 5px 18px rgba(0,0,0,0.2)'
}
---
```

### Home-Blog
![home.png](../images/home-blog.png)


1. 指定 `type: 'blog'`

```js
// change /docs/.vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    type: 'blog'
  }  
}  
```

2. 设置首页的背景图片和头像，如果你想改变 bgImage 的风格，你可以设置值 `bgImageStyle` 来实现你想要的效果

```bash
# 这是你的主页 

---
home: true
bgImage: '/bg.png'
bgImageStyle: {
  height: '350px'
}
faceImage: '/head.png'
---
```

### custome home page <Badge type="tip" text="Beta" />

> 首页会自动添加 `header` 和 `footer`，自定义部分无需考虑添加头部和脚部内容。

将你希望首页样式封装成 `vue` 组件，封装成插件或者 `@vuepress/plugin-register-components` 插件全局注册，然后配置 `type`：


```js
module.exports = {
  theme: 'reco',
  themeConfig: {
    type: 'your vue component name'
  }  
}  
```