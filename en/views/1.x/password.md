---
title: Encryption
date: 2019-04-09
---

## Project Encryption

### Introduction

If the project is private and does not want to be made public, the content page can only be accessed after the key is logged in (the login will no longer be effective after closing the browser tab). You can set multiple passwords by setting `keys` in the format of the array. The value of the array must be a string.

```javascript
// .vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    // secret key
    keyPage: {
      keys: ['32-bit md5 secret key'], // should set to md5 secret key after version 1.3.0
      color: '#42b983', // The color of the login page animation ball
      lineColor: '#42b983' // The color of the login page animation line
    }
  }
}
```

### Set Secret Key <Badge text="1.3.0+" />

If you password is `123456`, then set the `keys` field to its 32-bit md5 secret key: `e10adc3949ba59abbe56e057f20f883e`. After the blog is published, input the password `123456` to enter. Others will not know your password through your secret key, but you have to remember it.

Please input password in the following textbox to obtain the corresponding 32-bit md5 secret key:
<md5></md5>

### Absolute encryption <Badge text="1.1.2+" />

The default encryption method for the project is to locate the encrypted page above the actual content, so this encryption function itself has no real effect.

If you need absolute encryption, you need to set `absoluteEncryption: true`, but this will affect two things:
1. SSR rendering of the page;
2. The jump of the anchor point.

## Article Encryption

If the project is public and some articles may need to be encrypted, you need to set `keys` in `frontmatter` in an array format. You can set multiple passwords. The value of the array must be a string.

```yaml
---
title: vuepress-theme-reco
date: 2019-04-09
author: reco_luan
keys:
 - '32-bit md5 secret key'
---
```

:::warning
**Legacy issues with encrypted pages:**
Encryption cannot be hidden when entering a separate article from a single encrypted article (such as the navigation bar)
:::
