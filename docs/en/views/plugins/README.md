---
title: Introduction to Plugins
date: 2019-09-30
---

## What is Plugin

Since version `1.0` VuePress supported plugins, which not only enable us to use our favorite theme but also choose some plugins to enrich your blog or domentation and build your own static website.

Our theme `vuepress-theme-reco` has also become a plugin since version `1.1.0`. We packed independent features or components into plugins, which make our core code simpler and easier to maintain and extend.

## Source of Plugins

### Plugins under vuepress-reco

We developed some plugins to help enrich your website. You could choose to use them if you wish.

::: tip
The plugins we developed are under `npm`'s organization `vuepress-reco`, so the default full name of a following plugin is `@vuepress-reco/vuepress-plugin-<name>` (such as the full name for `back-to-top` is `@vuepress-reco/vuepress-plugin-back-to-top`). We will just list the short names below.
:::

<table>
  <tr>
    <th style="width:100px">Name</th>
    <th style="width:60px">Version</th>
    <th style="width:20px">Built-in?</th>
    <th style="width:20px">Can Only Be Used in Our Theme?</th>
    <th style="width:100px">Description</th>
  </tr>
  <tr>
    <td>
      <a href="backToTop.html">back-to-top</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-back-to-top"/>
    </td>
    <td>✔</td>
    <td>✖</td>
    <td>Go back to top of the page</td>
  </tr>
  <tr>
    <td>
      <a href="pagation.html">pagation</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-pagation"/>
    </td>
    <td>✔</td>
    <td>✖</td>
    <td>Paginate your posts and quickly navigate to any page</td>
  </tr>
  <tr>
    <td>
      <a href="screenfull.html">screenfull</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-screenfull"/>
    </td>
    <td>✔</td>
    <td>✖</td>
    <td>Bring the page or any element into full screen</td>
  </tr>
  <tr>
    <td>
      <a href="loadingPage.html">loading-page</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-loading-page"/>
    </td>
    <td>✔</td>
    <td>✖</td>
    <td>Show animation when loading pages</td>
  </tr>
  <tr>
    <td>
      <a href="kanbanniang.html">kan-ban-niang</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-kan-ban-niang"/>
    </td>
    <td>✖</td>
    <td>✖</td>
    <td>Add a cute kanban girl</td>
  </tr>
  <tr>
    <td>
      <a href="comments.html">comments</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-comments"/>
    </td>
    <td>✔</td>
    <td>✖</td>
    <td>Comment plugin to support 2 comment systems: Valine and Vssue</td>
  </tr>
  <tr>
    <td>
      <a href="extractCode.html">extract-code</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-extract-code"/>
    </td>
    <td>✔</td>
    <td>✖</td>
    <td>Display code of multiple languages</td>
  </tr>
  <tr>
    <td>
      <a href="rss.html">rss</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-rss"/>
    </td>
    <td>✖</td>
    <td>✔</td>
    <td>Help generate RSS</td>
  </tr>
  <tr>
    <td>
      <a href="bgmPlayer.html">bgm-player</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-bgm-player"/>
    </td>
    <td>✖</td>
    <td>✖</td>
    <td>Add a bgm player</td>
  </tr>
</table>

::: warning Note
- only **built-in plugins** are customized when installing our theme, non built-in ones require you to install and customize yourself
- to make the theme more customized, we developed some plugins **only suited for our theme** (such as the RSS one). Thus, these plugins might not work in other themes
:::

### VuePress Plugin Ecosystem in `npm`

If you want to add some of your favorite plugins, you could [search `vuepress-plugin` in npm](https://www.npmjs.com/search?q=vuepress-plugin). Then use `npm` or `yarn` to [download plugins](#download-a-plugin) and [add them](#use-a-plugin) in `.vuepress/config.js` to start using.

### Built-in Plugins in Our Theme

We have some out-of-the-box built-in plugins in our theme to help you quickly build a simple and elegant static website.

These built-in plugins have already been customized according to the style of our theme and you don't need to trigger manually. If you don't like our default customizations, you are free to [change customizations](#customize-a-plugin) yourself or simply disable them.

|                                                           Name                                                           | Must-have? |                                   Default Settings                                   | 描述                             |
| :----------------------------------------------------------------------------------------------------------------------: | :------: | :--------------------------------------------------------------------------: | :------------------------------- |
|                                              [back-to-top](./backToTop.md)                                               |    ✖     |                                      -                                       | ...                              |
|                                                [comments](./comments.md)                                                 |    ✔     | Need to add `$themeConfig.vssueConfig` or `$themeConfig.valineConfig` | ...                              |
|                                             [loading-page](./loadingPage.md)                                             |    ✔     |                              No customization needed                              | ...                              |
|                                                [pagation](./pagation.md)                                                 |    ✔     |                              No customization needed                              | ...                              |
|                                              [screenfull](./screenfull.md)                                               |    ✔     |                              No customization needed                              | ...                              |
|                                                      [extractCode](./extractCode.md)                                                       |    ✖     |                  -                   | ...                              |
| [@vuepress/plugin-active-header-links](https://v1.vuepress.vuejs.org/plugin/official/plugin-active-header-links.html) |    ✖     |                                      -                                       | Automatically activates sidebar links when page scrolls |
|         [@vuepress/plugin-medium-zoom](https://v1.vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html)         |    ✖     |              `{selector: '.theme-reco-content :not(a) > img'}`               | [medium-zoom](https://github.com/francoischalifour/medium-zoom) plugin |
|           [@vuepress/plugin-nprogress](https://v1.vuepress.vuejs.org/plugin/official/plugin-nprogress.html)           |    ✖     |                                      -                                       | A progress bar plugin based on [nprogress](https://github.com/rstacruz/nprogress) |
|              [@vuepress/plugin-search](https://v1.vuepress.vuejs.org/plugin/official/plugin-search.html)              |    ✔     |                                      -                                       | A search plugin based on [Headers](https://v1.vuepress.vuejs.org/miscellaneous/glossary.html#headers) |
|                             [@vuepress/plugin-blog](https://vuepress-plugin-blog.ulivz.com/)                             |    ✖     | This is a basic plugin for blogging. Please don't disable or change config | A plugin for blogging |
|[vuepress-plugin-container](https://vuepress.github.io/plugins/container/)|✖| Use the default theme config, see demo at [Use Containers in Markdown](../1.x/syntax.md#container) | Register (multiple) new containers in your articles |

::: tip What is a must-have plugin?
Since our theme is transforming to plugins and still haven't decoupled from most plugins, you might encounter weird errors if disabling them. Thus, **please don't disable the must-have ones.** If you have such needs, please comment below.
:::

## How to Use a Plugin

> [Detailed documentation on how to use a plugin](https://vuepress.vuejs.org/plugin/using-a-plugin.html)

### Download a Plugin

If you like a released plugin in `npm`, you could execute the following commands to download and install it:

```bash
yarn add <pagkageName> -D
# or
npm i <packageName> -D
```

::: warning Note
A full package name is needed, i.e., have to prepend `vuepress-plugin-`
:::

### Use a Plugin

After downloading a plugin, you could customize your `.vuepress/config.js` to use it:

```javascript
module.exports = {
  plugins: ["vuepress-plugin-xxx"]
};
```

You could omit `vuepress-plugin-`:

```javascript
module.exports = {
  plugins: ["xxx"]
};
```

### Customize a Plugin

If your chosen plugin supports `options`, you could customize in two ways:

#### 1. Babel-like

```javascript
module.exports = {
  plugins: [
    [
      "vuepress-plugin-xxx",
      {
        /* options */
      }
    ]
  ]
};
```

such as:

```javascript
module.exports = {
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["miku"],
        clean: true,
        modelStyle: {
          position: "fixed",
          left: "0px",
          bottom: "0px",
          opacity: "0.9",
          zIndex: 99999
        }
      }
    ]
  ]
};
```

#### 2. Object-oriented

```javascript
module.exports = {
  plugins: {
    xxx: {
      /* options */
    }
  }
};
```

::: tip
You could use this way to customize built-in plugins in our theme, or disable one by setting `options` to `false`:

```javascript
module.exports = {
  plugins: [
    ["@vuepress-reco/back-to-top", false] // disabled.
  ]
};
```

:::
