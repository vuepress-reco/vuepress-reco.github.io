---
title: Supported Markdown Syntax
date: 2019-11-03
author: SigureMo
---

## Original Markdown Syntax

Of course you could use the original Markdown syntax, but if there is something not easily realized in Markdown, you could also write HTML.

## Default Markdown Extensions in VuePress

VuePress has some easy built-in grammar so that you could write posts more easily. In the following I will briefly list supported Markdown extensions. For more details, please see [VuePress Markdown extensions](https://v1.vuepress.vuejs.org/guide/markdown.html)

- Table in the style of GitHub
- Table of Contents
- Emoji
- Code block
    - syntax highlighting
    - specific line highlighting
    - display line numbers
    - import code snippets

## Use `markdown-it`'s Markdown extensions

You could use `markdown-it` plugins for Markdown extensions.

``` javascript
// .vuepress/config.js

module.exports = {
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```

## Use Vue in Markdown

You can even use Vue or Vue components in Markdown directly, just like the built-in badge in this theme<Badge text="Badge" />. For more examples please refer to official documentation of VuePress: [Using Vue in Markdown](https://vuepress.vuejs.org/guide/using-vue.html)

## Use Plugins' Grammar Extensions

There are some VuePress plugins to extend Markdown grammar，please refer to [how to use a plugin](../plugins/README.md#how-to-use-a-plugin) to add a desired plugin.

The following introduces two useful plugins.

### Container

[vuepress-plugin-container](https://vuepress.github.io/en/plugins/container/) allows you to customize a container. VuePress uses the plugin to produce three built-in containers and here are the examples:

**Input**

``` markdown
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: theorem Newton's first law
If the net force (the vector sum of all forces acting on an object) is zero, then the velocity of the object is constant.

::: right
From [Wikipedia](https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion)
:::

::: details
This is a details block and doesn't take effect in IE / Edge.
:::
```

**Output**

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: theorem Newton's first law
If the net force (the vector sum of all forces acting on an object) is zero, then the velocity of the object is constant.

::: right
From [Wikipedia](https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion)
:::

::: details
This is a details block and doesn't take effect in IE / Edge.
:::

### Flowchart

[vuepress-plugin-flowchart](https://flowchart.vuepress.ulivz.com/) enables you to draw a flowchart in Markdown like this:

**Input**

```
@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend
```

**Output**

@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend
