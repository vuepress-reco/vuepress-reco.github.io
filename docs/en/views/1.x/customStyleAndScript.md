---
title: Customize Style and Script
date: 2019-11-22
author: SigureMo
---

## Customize Your Own Style

If you are not happy with the default style, VuePress offers some simple config files to easily customize what you want in style.

### Change Default Colors

You could customize `.vuepress/styles/palette.styl` to quickly modify color configs in the theme.

``` stylus
// default colors
$accentColor = #3eaf7c                      // 主题颜色
$textColor = #2c3e50                        // 文本颜色
$borderColor = #eaecef                      // 边框线颜色
$codeBgColor = #282c34                      // 代码块背景色
$backgroundColor = #ffffff                  // 悬浮块背景色
```

### Add or Modify Theme Style

You could create a `.vuepress/styles/index.styl` file to easily add more styles. Note that this is a Stylus file, but you could also use normal CSS grammar.

``` stylus
.content {
  font-size 30px
}
```

::: tip Can the Color and Style Be in the Same File?
Sorry, you can't. VuePress will parse global variables in `palette.styl` and apply in blog style, before finally parse `index.styl` to override default blog style.
:::

## Import Style and Script in Head

You could import style and script in `head` in `.vuepress/config.js`. `head` will be interpreted as `<head>` at the end.

For example:

``` js
module.exports = {
  head: [
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" }],
    ["script", { src: "scripts/demo.js" }]
  ]
}
```

The above will be interpreted as:

``` html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css">
  <script src="scripts/demo.js"></script>
</head>
```

See [official documentation on head configuration](https://v1.vuepress.vuejs.org/config/#head) for more details.

## Apply Style and Script to a Single Page

Sometimes we may just want to apply some `JavaScript` or `CSS` to the current page. We could do this by adding original `<script>` or `<style>` tags in the `Markdown` file, which will be compiled and extracted in the output HTML file.

**Input**

``` html
<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
export default {
  props: ['slot-key'],
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = '这个块是被内联的脚本渲染的，样式也采用了内联样式。'
  }
}
</script>
```

**Output**

<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
export default {
  props: ['slot-key'],
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = '这个块是被内联的脚本渲染的，样式也采用了内联样式。'
  }
}
</script>