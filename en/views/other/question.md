---
title: FAQ
date: 2019-04-13
sidebar: 'auto'
---

::: tip
We have collected some usual questions here. If you don't find the answer you want here, please read `VuePress`' [default theme config](https://v1.vuepress.vuejs.org/theme/default-theme-config.html). As final resort, you could post an [issue on GitHub](https://github.com/vuepress-reco/vuepress-theme-reco/issues).

Please note that this theme includes almost all features from `VuePress`' default theme. Thus, this FAQ only serves to introduce extra features. If you've found some features this site hasn't mentioned, or you want to know some features in default theme, please go to the [official documentation](https://v1.vuepress.vuejs.org/theme/default-theme-config.html).
:::

## 1. How to Add `icon-font`?

1. Put font files under `public` folder, then in `enhanceApp.js` import the css file among the font files.
2. If your `icon`'s full `className` is `class="iconfont icon-myIcon"`, configure `icon-font` as `{ text: 'Home', link: '/', icon: 'iconfont icon-myIcon' }`.

## 2. How to Show Abstract?

Anything above `<!-- more -->` is the abstract.

<RecoDemo :collapse="true">
<template slot="code-markdown">
  <<< @/.vuepress/demo/abstract_en.md
</template>
</RecoDemo>

## 3. Can the Footer of Home Page Be Customized?

Sorry, you can't.

## 4. On the Home Page, How to Set the Avatar in Infobar on the Right and the Icon in Navbar on the Left?

The avatar in infobar on the right is configured by `themeConfig.authorAvatar` in `.vuepress/config.js`:

``` javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    authorAvatar: '/avatar.png'
  }
}
```

The icon in navbar on the left is configured by `themeConfig.logo` in `.vuepress/config.js`:

``` javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/head.png'
  }
}
```

Moreover, don't forget to put your pictures in `.vuepress/public/`.

## 5. Is There Any Rule to Where to Put My Blogs?

You could put your blogs anywhere, but have to make sure they are places VuePress could parse. For example, if your command is `vuepress dev docs`, then position your blogs under `docs/`. Our theme doesn't force you to put under a specific subdirectory, and you could specify that yourself. Please see [this documentation](https://vuepress.vuejs.org/guide/directory-structure.html) for more info on directory structure.

## 6. How Doesn't the Sidebar Show `h1` Title?

In `vuepress-theme-reco`, Please forgot `h1` and instead use [`frontmatter`](https://vuepress.vuejs.org/guide/frontmatter.html#alternative-frontmatter-formats) for the title and other article metadata. The main body starts from `h2`.

## 7. How to Solve the Issue of Showing Comments in Version `1.1.0`?

This has been solved in version 1.1.0`.

## 8. How to Customize the Comment Section?

`VuePress` allows you to add styles for your website in `.vuepress/styles/index.styl`. You could change almost all styles of the theme (including the comment section). Please see [this documentation](https://vuepress.vuejs.org/config/#index-styl) for more info on how to add extra styles.

## 9. Is the Click-to-Zoom feature Supported?

In version `1.1.1`, the theme has set `@vuepress/medium-zoom` as a built-in plugin, which enables the click-to-zoom feature. Please see [The Theme's Built-in Plugins](../plugins/README.md#built-in-plugins-in-our-theme) for more details.

## 10. What If the Plugin or Theme Doesn't Work?

::: tip
Since configuration and usage of theme and plugin are quite similar (`theme/index.js` is also a plugin in `VuePress`), the word "plugin" is used in place of "plugin or theme".
:::

Please follow these steps to check:

1. see if the plugin has been loaded in the compilation output info in terminal
  - if plugin is not loaded, please check if `config.js` is customized correctly
  - if plugin is loaded with error, please check if it has been downloaded and installed
  - if plugin still can't be loaded after being downloaded and installed, please delete `node-modules/` and reinstall dependencies (`yarn` is recommended over `npm`)
2. if the plugin affects the frontend, please check if the console reports any error and debug accordingly
3. check the `options` supported in the documentation and reconfigure `config.js`
4. search for similar `issues and solutions` in the project or community of the plugin
