---
title: Add Timeline
date: 2019-04-09
---

::: tip
After the `1.1.0` version, the timeline has been refactored. Users do not need to add additional files, and the other configurations are unchanged.
:::

::: tip
It is worth mentioning that TimeLine only shows blogs with Front Matter `categories` & `title`, and without Front Matter `publush === false` & `home: true`.
:::

## Add Navigation Button

```javascript
// .vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
    ]
  }
}
```

## Add the required file <Badge type="warning" text="1.1.0+ Not required" />

**`/docs/timeLine/README.md`**

```yaml
---
isTimeLine: true
sidebar: false
isComment: false
---

## Time Line
```

## Add date when writing articles

::: warning
The date can be filled in `2019-10-20` or `2019-10-20 12:23:11`.
:::

```yaml
---
title: [Vue]proxyTable for Cross-domain Solutions
date: 2017-12-28
tags:
- vue
- webpack
---
```
