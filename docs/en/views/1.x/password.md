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
    // 密钥
    keyPage: {
      keys: ['md5 加密后的32位密文'], // 1.3.0 版本后需要设置密文
      color: '#42b983', // The color of the login page animation ball
      lineColor: '#42b983' // The color of the login page animation line
    }
  }
}
```

### 设置密文 <Badge text="1.3.0+" />

需要将密码字符串设置为 `md5` 32位加密密文，你可以通过下面的工具获取相应的密文。
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
 - 'md5 加密后的32位密文'
---
```

:::warning
**Legacy issues with encrypted pages:**
Encryption cannot be hidden when entering a separate article from a single encrypted article (such as the navigation bar)
:::
