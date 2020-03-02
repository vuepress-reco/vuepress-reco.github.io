---
title: vuepress-theme-reco
date: 2019-04-09
---

![vuepress](https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg)
![leancloud-storage](https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg)
![valine](https://img.shields.io/badge/valine-1.3.4-blue.svg)

::: tip Introduction
1. This is a Vuepress theme with the necessary features for a blog: categories, tags, pagination, comments, etc. <br/>
2. This minimalistic theme modifies the default theme but the default configs still apply
3. You could open [午后南杂](http://recoluan.gitlab.io) to see an example
:::

## Play Together

### 0.x

`vuepress-theme-reco@0.x` is based on blog theme of `vuepress@0.x`。

`vuepress@0.x` has simple features, is only good for simple documentation, and supports theme customization. Actually it is the simplicity that drives me to build a blog theme for VuePress. After an all-nighter, I built the very first version for `vuepress-theme-reco@0.x`.

This theme has just been open sourced recently and many friends have proposed great suggestions in various ways, so I am actively updating the theme.

Since I am a frontend engineer, I always wanted to add some fancy visual effects but finally ridded them because of minimalism. After all, I see `reco` as a product, rather than a random trial.

### 1.x

As more users asked me why `vuepress-theme-reco@0.x` can't be used on top of `vuepress@1.x`, originally I wanted to fixed some simple bugs but finally decided to develop `vuepress-theme-reco@1.x`. At another 2:30a.m. (quite productive at night), I quietly started.

The core update was the offical plugin `@vuepress/plugin-blog`, which doesn't filter data any more but stored the metadata in `$categories` and `$tags`. The plugin traded simpler realization of categorization and tagging with limitations. In the following 2 or 3 days, I was migrating features and debugging.

During the development of `vuepress-theme-reco@1.x`, I understand deeper the importance of modular programming. If I had not modulazied some features but directly copy and paste, I wouldn't have updated the theme that easily. The more modules a project is divided into, the more flexible in actual usage.

### CLI

I sincerely hope more friends will opt in and better this theme. If time allows, I will open source a CLI (a scaffolding tool) to auto generate a blog. Users can go over the config step and directly write great content. It has been my aspiration to make this theme incorporate more features and easier to use.

### Contributors

**My sincerely thanks go to the contributors!**

|GitHub Username|Contribution History|
|:-:|-|
|[kangxu](https://github.com/kangxukangxu)|[vuepress-theme-reco@0.x](https://github.com/recoluan/vuepress-theme-reco/commit/ec7426a88d50cf8d9f90a7ad9b731a10da7f438b)|
|[Ekko](https://github.com/danranVm)|[vuepress-theme-reco-demo@1.x](https://github.com/recoluan/vuepress-theme-reco-demo/commit/6d2bbe919e7f6564b8c8173558d197e38e024dc5)|

**I also thank our beautiful lady designers!**

|GitHub Username|Contribution History|
|:-:|-|
|Zoey|Revised Theme Logo|
|冰冰|Original Theme Logo|

## Preview

### Home
![home.png](../images/1.png)

### Home-Blog
![home.png](../images/home-blog.png)


### Category
![category.png](../images/2.png)


### Tag
![tag.png](../images/3.png)


### Article
![article.png](../images/4.png)

### Add Password

![password.png](../images/5.png)

### Timeline

![timeline.png](../images/6.png)

## License
[MIT](https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE)