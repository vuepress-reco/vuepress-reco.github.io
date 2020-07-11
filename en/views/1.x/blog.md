---
title: Category and Tag
date: 2019-04-09
---

## Add Blog Configurations

```javascript
// .vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
     // Blog configuration
    blogConfig: {
      category: {
        location: 2,     // The position occupied in the navigation bar menu, default to 2
        text: 'Category' // Text default to "Category"
      },
      tag: {
        location: 3,     // The position occupied in the navigation bar menu, default to 3
        text: 'Tag'      // Text default to "Tag"
      }
    }
  }
}
```

## Add Categories and Tags when Writing Blogs

```yaml
---
title: [Vue]proxyTable for Cross-domain Solutions
date: 2017-12-28
categories:
 - frontEnd
tags:
 - vue
---
```

> Note: `categories` and `tags` should be filled in as an array.
