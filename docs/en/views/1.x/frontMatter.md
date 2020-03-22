---
title: Front Matter
date: 2019-10-21
---

This is a complete `Front Matter`:

```yaml
---
title: The Practice of Roast Duck
date: 2019-08-08
sidebar: 'auto'
categories:
 - cooking
 - hobbies
tags:
 - barbecue
 - duck
keys:
 - '123456'
publish: false
---
```

## Often Used Predefined Variables

### title

- description: The title of the article. Instead of defining the title through the first level heading, we set in `Front Matter`.

### date

- description: The date the article was created, in the format `2019-08-08` or `2019-08-08 08:08:08`.

### sidebar

- description: Whether to open the sidebar.

### categories

- description: The category to which it belongs.

### tags

- description: The tag to which it belongs.

### keys

- description: Article access password.

### publish

- description: Whether the article is published.

### sticky <Badge text="1.1.2+" />

- description: Article sticky.
- type: `number`
- sort type: Descending order, you can lower the priority of the top posts according to `1, 2, 3, ...`.

## Some Other Predefined Variables

There are some other predefiend variables like `prev`, `next`, please check the [documentation](https://vuepress.vuejs.org/guide/frontmatter.html#alternative-frontmatter-formats)