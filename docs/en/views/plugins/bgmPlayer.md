---
title: Background Music Player
date: 2019-12-02
author: 橘子
---

## Introduction <GitHubLink repo="vuepress-reco/vuepress-plugin-bgm-player/"/>

![demo.png](./images/bgm.png)

Bgm player plugin for vuepress-theme-reco or other vuepress theme.  

### Name

- **As plugin**: `@vuepress-reco/vuepress-plugin-bgm-player`
- **As component**: `BgMusic` (auto appear in the page, no need for extra code)

## Option API

> The following are the default parameters when plugin is used.

### audios

- description: playlist
- type: `Array`
- default: no default value and must be customized
- example
  ```
  audios: [
    // local media examples
    {
      name: '장가갈 수 있을까',
      artist: '咖啡少年',
      url: '/bgm/1.mp3',
      cover: '/bgm/1.jpg'
    },
    // online media examples
    {
      name: '강남역 4번 출구',
      artist: 'Plastic / Fallin` Dild',
      url: 'https://assets.smallsunnyfox.com/music/2.mp3',
      cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
    },
    {
      name: '用胳膊当枕头',
      artist: '최낙타',
      url: 'https://assets.smallsunnyfox.com/music/3.mp3',
      cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
    }
  ]  
  ```

### Position

- description: position of player
- type: `Object`
- default
  ``` json
  { 
    left: '10px',
    bottom: '10px',
    'z-index': '999999'
  }
  ```

### shrinkMode

- description
  - PC can set shrinkMode to customize which mode when window is shrunk
  - Mobile device defaults to `float`ing window
- type: `String`
- default: `mini`
- accepted-values: `mini | float`

### floatPosition

- description: in `float`ing window, set the side to show
- type: `String`
- default: `left`
- accepted-values: `left | right`

### floatStyle

- description: `float`ing window style
- type: `Object`
- default:
  ```json
  { 
    bottom: '100px',
    'z-index': '999999'
  }
  ```

## About

- **Compatibility**：vuepress-plugin-bgm-player uses `audio` in HTML5, so compatibility is associated that of `audio`
- customize according to `dark` mode in `vuepress-theme-reco`
  ![dark.png](./images/darkBgm.png)
- **Development Plans**
  - auto play
  - fix mobile customization
  - switch animation
