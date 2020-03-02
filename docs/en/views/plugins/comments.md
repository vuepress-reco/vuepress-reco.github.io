---
title: Comments
date: 2019-10-17
---

## Introduction <GitHubLink repo="vuepress-reco/vuepress-plugin-comments/"/>

Comments plugin for vuepress-theme-reco or other vuepress theme.

### Name

- **As plugin**: `@vuepress-reco/vuepress-plugin-comments`
- **As component**: `Comments` / `AccessNumber (page views by Valine)` (used in theme development)

## Option API

The plugin will have an input parameter `commentsSolution`. It's `valine` if using `Valine` and `vssue` if using `Vssue`. We can use this parameter for differentiation, such as page views.

### Valine

---

```javascript
module.exports = {
  theme: 'reco',
  themeConfig: {
    valineConfig: {
      appId: '...',// your appId
      appKey: '...', // your appKey
    }
  }
}
```

Or:

```javascript
module.exports = {
  theme: 'reco',
  plugins: [['@vuepress-reco/comments', {
    solution: 'valine',
    options: {
      appId: '...',// your appId
      appKey: '...', // your appKey
    }
  }]]
}
```

### Vssue

---

```javascript
module.exports = {
  theme: 'reco',
  themeConfig: {
    vssueConfig: {
      platform: 'github',
      owner: 'OWNER_OF_REPO',
      repo: 'NAME_OF_REPO',
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
    }
  }
}
```

Or:

```javascript
module.exports = {
  theme: 'reco',
  plugins: [['@vuepress-reco/comments', {
    solution: 'vssue',
    options: {
      title: 'vuepress-theme-reco',
      platform: 'github',
      owner: 'OWNER_OF_REPO',
      repo: 'NAME_OF_REPO',
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
    }
  }]]
}
```

**`options` 详解：**
- title: set title of `Issue` for the current post
- platform: supported code hosting platform(s)
- owner: `owner` of issues
- repo: `repository` to store comments
- clientId: `OAuth App`'s `client id`
- clientSecret: `OAuth App`'s `client secret` (only needed for some platforms)

**`platform` details ([Vssue's supported platforms](https://vssue.js.org/guide/supported-platforms.html)）：**
- github: `@vssue/api-github-v3`
- github-v4: `@vssue/api-github-v4`
- gitlab: `@vssue/api-gitlab-v4`
- bitbucket: `@vssue/api-bitbucket-v2`
- gitee: `@vssue/api-gitee-v5`
-

### AccessNumber

> Only effective when using `Valine`.

#### idVal

- description: ID to record page views by Valine
- type: `String`

#### numStyle

- description: number style for page views (used for adjusting display style for different positions)
- type: `Object`

#### flagTitle

- description: title of post
- type: `String`

## Contributors

<Contributors user="vuepress-reco" repo="vuepress-plugin-comments"></Contributors>
