---
title: Extract Code
date: 2019-11-01
---

## Introduction <GitHubLink repo="vuepress-reco/vuepress-plugin-extract-code/"/>

Features and code presentation plugin for vuepress-theme-reco or other vuepress themes.

<RecoDemo :collapse="true">
  <template slot="code-template">
    <<< @/docs/.vuepress/demo/extract-code.vue?template
  </template>
  <template slot="code-script">
    <<< @/docs/.vuepress/demo/extract-code.vue?script
  </template>
  <template slot="code-style">
    <<< @/docs/.vuepress/demo/extract-code.vue?style
  </template>
  <extract-code slot="demo"></extract-code>
</RecoDemo>

### Name

- **As plugin**: `@vuepress-reco/vuepress-plugin-extract-code`

## Usage

### Modify `config.js`

```js
module.exports = {
  plugins: [
    '@vuepress-reco/extract-code'
  ]
}
```

### Display a `VUE` Component

> `@` is an alias for current directory

```html
<RecoDemo>
  <template slot="code-template">
    <<< @/docs/.vuepress/demo/demo.vue?template
  </template>
  <template slot="code-script">
    <<< @/docs/.vuepress/demo/demo.vue?script
  </template>
  <template slot="code-style">
    <<< @/docs/.vuepress/demo/demo.vue?style
  </template>
</RecoDemo>
```

### Randomly Combine Code to Display

For example, if you want to display `HTML` code, you could just change the `slot` to `code-html` and point the file to corresponding file.

```html
<RecoDemo>
  <template slot="code-html">
    <<< @/docs/.vuepress/config/nav/index.html
  </template>
  <template slot="code-css">
    <<< @/docs/.vuepress/config/nav/style.css
  </template>
  <template slot="code-js">
    <<< @/docs/.vuepress/config/nav/index.js
  </template>
</RecoDemo>
```

### Display Code Output

If you want to display the output of your demo, could set `slot` to `demo`:

#### 1. Use `img` tag to display output screenshot

  ```html
  <RecoDemo>
    <template slot="code-template">
      <<< @/docs/.vuepress/demo/demo.vue?template
    </template>
    <template slot="code-script">
      <<< @/docs/.vuepress/demo/demo.vue?script
    </template>
    <template slot="code-style">
      <<< @/docs/.vuepress/demo/demo.vue?style
    </template>

    <img src="./images/demo.png" slot="demo" />
  </RecoDemo>
  ```

#### 2. Of course you could write the output demo as a `Vue` component:

```html
<RecoDemo>
  <template slot="code-template">
    <<< @/docs/.vuepress/demo/demo.vue?template
  </template>
  <template slot="code-script">
    <<< @/docs/.vuepress/demo/demo.vue?script
  </template>
  <template slot="code-style">
    <<< @/docs/.vuepress/demo/demo.vue?style
  </template>

  <some-demo slot="demo"></some-demo>
</RecoDemo>
```

You could do this as long as your component works in a `.md` file. You could put these components under `.vuepress/components`. Otherwise you could use the official plugin `@vuepress/plugin-register-components` to register these components and import as a component.

#### 3. 另外，如果你想要展示的案例代码就是一个独立的可以显示效果的功能组件，那最方便不过了，因为这个组件既可以作为代码来源，又可以用来显示效果：

```html
<RecoDemo>
  <template slot="code-template">
    <<< @/docs/.vuepress/demo/some-demo.vue?template
  </template>
  <template slot="code-script">
    <<< @/docs/.vuepress/demo/some-demo.vue?script
  </template>
  <template slot="code-style">
    <<< @/docs/.vuepress/demo/some-demo.vue?style
  </template>

  <some-demo slot="demo"></some-demo>
</RecoDemo>
```

### Display Unnamed Code

Your code to display doesn't have to be in a file but can just be shown in text. Though it's easy to do so, syntax highlighting is disabled.

```html
<RecoDemo :collapse="true">
  <template slot="code-js">
    <pre>
      console.log(`I'm reco_luan.`)
    </pre>
  </template>
</RecoDemo>
```

There is another shortcoming that extra indentation would be shown, but can be solved this way:

```html
<RecoDemo :collapse="true">
<template slot="code-js">
<pre>
const a = 1
a.b = 1
</pre>
</template>
</RecoDemo>
```

### Display Code Block by Default

Code display is hidden by default and can only be shown if the button in top left corner is clicked. You could set `collapse` to `true`:

```html
<RecoDemo :collapse="true">
  <template slot="code-template">
    <<< @/docs/.vuepress/demo/some-demo.vue?template
  </template>
  <template slot="code-script">
    <<< @/docs/.vuepress/demo/some-demo.vue?script
  </template>
  <template slot="code-style">
    <<< @/docs/.vuepress/demo/some-demo.vue?style
  </template>

  <some-demo slot="demo"></some-demo>
</RecoDemo>
```

## Contributors

<Contributors user="vuepress-reco" repo="vuepress-plugin-extract-code"></Contributors>
