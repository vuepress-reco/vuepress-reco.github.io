---
title: Customize the Dark Mode
date: 2019-12-29
---

::: tip
Since version `1.2.0`, we have added dark mode. If you have some of your own plugins or components in this theme, you may also want to customize them accordingly.
:::

## 初始化

暗色模式默认开启，并且为 `auto` 模式，你也可以自定义初始化配置：

```js
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    mode: 'dark' // auto 跟随系统，dark 暗色模式，light 亮色模式，null 与 light 效果相同，但没有切换按钮
  }
}  
```

## Color Variables

Here are the color variables provided by the theme. Please select the corresponding color variable according to your needs and replace the color value in your component:

|Variables|Light Mode|Dark Mode|
|-|-|-|
|--default-color-10|rgba(0, 0, 0, 1)|rgba(255, 255, 255, 1)|
|--default-color-9|rgba(0, 0, 0, .9)|rgba(255, 255, 255, .9)|
|--default-color-8|rgba(0, 0, 0, .8)|rgba(255, 255, 255, .8)|
|--default-color-7|rgba(0, 0, 0, .7)|rgba(255, 255, 255, .7)|
|--default-color-6|rgba(0, 0, 0, .6)|rgba(255, 255, 255, .6)|
|--default-color-5|rgba(0, 0, 0, .5)|rgba(255, 255, 255, .5)|
|--default-color-4|rgba(0, 0, 0, .4)|rgba(255, 255, 255, .4)|
|--default-color-3|rgba(0, 0, 0, .3)|rgba(255, 255, 255, .3)|
|--default-color-2|rgba(0, 0, 0, .2)|rgba(255, 255, 255, .2)|
|--default-color-1|rgba(0, 0, 0, .1)|rgba(255, 255, 255, .1)|
|--background-color|#fff|#25272a|
|--box-shadow|0 1px 6px 0 rgba(0, 0, 0, 0.2)|0 1px 6px 0 rgba(0, 0, 0, .9)|
|--text-color|#2c3e50|#aaa|
|--border-color|#eaecef|rgba(0, 0, 0, .3)|
|--code-color|rgba(27, 31, 35, 0.05)|rgba(0, 0, 0, .3)|
|--mask-color|#888|#000|

## Usage

```stylus
.title {
  color: var(--text-color)
}
```
