---
title: vuepress-theme-reco个人向优化
date:  2020-07-17
author: 会飞的小弋
categories:
 - blog
---

﻿## 前言

很荣幸被作者大佬邀请谈谈自己的修改心得，也很感谢**午后**大佬能做出如此漂亮的主题。

首先说明**Vuepress**的`vuepress-theme-reco`主题已经很完美了，主要因为我已经有了自己的生活博客[小弋の生活馆](https://lovelijunyi.gitee.io/)，还缺一个文档类的技术博客，所以为了更加适合自己查阅**技术文档**，对作者的主题进行一点小小的优化（个人向，比较主观）：

1. 更换主题到本地后，无法直接通过**npm install**直接更新主题
2. 进一步对侧边栏优化，右侧滚动栏优化，字体优化
3. 增加各种好玩实用的插件
4. 取消了博客页面，直接转跳到文档页面
5. 个人向修改，不喜勿喷

我的博客：https://lovelijunyi.gitee.io/blog/
![](https://img-blog.csdnimg.cn/20200717170032849.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hvd2FyZXlvdTIxMDQ=,size_16,color_FFFFFF,t_70)

## 更换主题为本地

- 与hexo不一样，正常的主题文件会被安装到`node_modules`文件夹中。如果之前`vuepress-theme-reco`安装正确的话，可以在`node_modules`文件夹中找到改文件。所以如果不把主题文件放到本地，我们每次执行**npm install**的时候，新的文件就会把我们魔改过的文件覆盖掉。
- 接着不得不谈一下主题的启动流程：如果config没指定，系统会默认会检查`.vuepress/theme`，如果还没有就，直接用默认主题。
- 所以只要把下载(或者直接从`node_modules`中复制)下来的文件夹更名为**theme**，粘贴至 .vuepress文件夹下即可，如果在执行编译过程中，看到`tip Apply local theme at xxx\Desktop\blog\.vuepress\theme...`相关提示，就说明从theme文件夹启动成功
- 整个目录结构如下

```lua
Dev
├─── docs
│   └── .vuepress   // 配置目录
│   │    ├── public // 静态资源
│   │    ├── theme // 主题
│   │    │   ├── components // 组件
│   │    │   ├── global-components // 全局组件
│   │    │   ├── layouts // 布局(包括首页在内)
│   │    │   ├── styles // 样式
│   │    │   ├── util // 工具
│   │    │   ├── index.js // 入口配置
│   │    │   ├── noopModule.js // 依赖注入
│   │    │   ├── package.json // 主题依赖
│   │    │   ├── README.md // 主题说明
│   │    └── config.js
│   ├── FAQ     // 求索模块
│   ├── Store   // 仓库模块
│   ├── Thought // 随笔模块
│   └── README.md   // 博客首页
└── package.json
```

## 外挂组件修改

如果你不满足于主题提供的默认样式，VuePress 提供了一些简单的接口文件，可以让你能够很方便地定制你自己想要的效果，和**hexo外挂组件修改**一样，这类修改**无需改动源码**，上手简单。

### 修改主题颜色

我这里暂时没有修改，如有需要可以通过配置 `.vuepress/styles/palette.styl` 来快速修改主题的一些颜色属性。(如果不存在该目录和文件就创建一个)

```stylus
// 默认值
$accentColor = #3eaf7c                      // 主题颜色
$textColor = #2c3e50                        // 文本颜色
$borderColor = #eaecef                      // 边框线颜色
$codeBgColor = #282c34                      // 代码块背景色
$backgroundColor = #ffffff                  // 悬浮块背景色
```

### 修改主题样式

你可以创建一个 `.vuepress/styles/index.styl` 文件以方便地添加额外样式。这是一个 Stylus 文件，但你也可以使用正常的 CSS 语法，我的修改如下，主要是改进了文档页面的可读性和操作性：

```stylus
// 侧边栏样式
// 左侧侧边栏标题
.sidebar > .sidebar-links > li > a.sidebar-link {
  font-size: 1.5em !important;
  margin-left: -1em;
}
// 右侧文章标题导航栏
a.sidebar-link {
  font-size: 16px !important;
}
// 左侧边栏标题字体大小样式
.sidebar-heading span{
    font-size: 1.2em;
    font-weight: bold;

}
.sidebar-heading.open span{
    font-weight: bold;
}


// 左侧边栏展开文章的字体大小
a.sidebar-link.active {
    color: #070808 !important;
    font-size: 14px !important;
    background: #c3d4b742 !important;
}
.sidebar-sub-headers a.sidebar-link {
    margin: 0 1rem 0 1rem !important;
}
// 分组的透明度修改，未生效
.sidebar-group.is-sub-group > .sidebar-heading:not(.clickable){
    opacity: 0.5;
}

// 去除左上角标题，作者，标签等
.page .page-title {
    display: none;
}
```

效果如下

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Z1ZGFsaWp1bnlpL3BpY3R1cmUtYmVkL2ltZy8yMDIwMDcxNTE3MjA1MS5wbmc?x-oss-process=image/format,png)

其他修改，主要参照**znote大佬**，修改如下(可选)：


```stylus
blockquote {
	background-color: transparent !important;
    margin: 20px !important;
    padding: 0 !important;
    font-size: 1rem !important;
    color: #999 !important;
    border-left: .25rem solid #dfe2e5 !important;
    margin-left: 0 !important;
    padding-left: 1rem !important;
}

// tip,warning,danger容器样式
.custom-block.tip {
    background-color: #d4d4d452 !important;
}
.custom-block.warning {
    background-color: #ffa16d47 !important;
}
.custom-block.danger {
    background-color: #f9b4b457 !important;
}
// details容器样式
 summary {
    font-weight: 550;
    font-size: 16px;
    margin-top: 0.2rem;
    padding-top: 11px;
    padding-bottom: 11px;
    background-color: #75826b42;
    border-radius: 5px;
}

// 时间线样式
.timeline-wrapper .year {
  margin: 80px 0px 20px !important;
  font-size: 27px !important;
}
.timeline-wrapper .year-wrapper li {
    padding: 10px 20px 10px !important;
    border-bottom: 2px solid #999da06b !important;
    background: #c1c1e626;
    border-radius: 5rem;
    margin: 5px 0px;
    transition: all .5s;
}
.timeline-wrapper .year-wrapper li:hover {
    transform:  translate(50px,0);
    transition: all .5s;
}
.timeline-wrapper .year-wrapper li .date {
  width: 43px !important;
  font-size: 13px !important;
}
.timeline-wrapper .year-wrapper li .date:before {
    top: 22px !important;
    border: 1px solid !important;
}
.timeline-wrapper:after {
    background: skyblue !important;
}
.timeline-wrapper .desc:before, .timeline-wrapper .year:before {
  background: cadetblue !important;
}

//主页，评论偏左
.page, .password-wrapper-in {
    margin-left: 8rem !important;
}
.comments-wrapper {
    padding: 2rem 2rem 2rem 10rem !important;
}
#valine .vwrap .vedit #veditor{
  background: url('/znote/img/other/comment.png')  
  background-position: 90% 60%
  background-size: 16rem 10rem
  background-repeat: no-repeat
}

$mobileSidebarWidth = $sidebarWidth * 0.82

// narrow desktop / iPad
@media (max-width: $MQNarrow)
  .sidebar
    font-size 15px
    width $mobileSidebarWidth !important;
  .page, .password-wrapper-in
    margin-left $mobileSidebarWidth !important;
  .comments-wrapper 
    padding: 2rem 2rem 2rem $mobileSidebarWidth*1.1 !important;

// wide mobile
@media (max-width: $MQMobile)
  .sidebar
    top 0
    padding-top $navbarHeight !important;
    transform translateX(-100%)
    transition transform .2s ease
  .page, .password-wrapper-in
    margin-left 0  !important;
  .comments-wrapper 
    padding: 2rem 2rem 2rem 2rem !important;
  .theme-container
    &.sidebar-open
      .sidebar
        transform translateX(0) !important;
    &.no-navbar
      .sidebar
        padding-top: 0 !important;
  .password-shadow
    padding-left 0 !important;

// narrow mobile
@media (max-width: $MQMobileNarrow)
  h1
    font-size 1.9rem
  .content__default
    div[class*="language-"]
      margin 0.85rem -1.5rem  !important;
      border-radius 0
//about me
@media (min-width: ($MQMobile + 1px))
  .theme-container.no-sidebar
    .sidebar
      display none
    .page, .password-wrapper-in
      margin-left 0  !important;
    .comments-wrapper 
      padding: 2rem 2rem 2rem 2rem !important;

//标签列表样式
.abstract-item {
  background-color: #acdcfd3d !important;  
  transition: all .5s;
}
.abstract-item:hover {
    transform:  scale(1.02);
    transition: all .5s;
}

//滚动条样式
::-webkit-scrollbar
  width: 6px !important;
/*滚动条的设置*/
::-webkit-scrollbar-thumb {
	background-color:#94989c8c !important; 
	background-clip:padding-box !important; 
	-webkit-border-radius: 10em !important; 
	-moz-border-radius: 10em !important; 
	border-radius: 10em !important; 
}
/*滚动条凹槽的颜色，还可以设置边框属性 */
::-webkit-scrollbar-track-piece {
	background-color:transparent !important; 
	-webkit-border-radius: 0em !important; 
	-moz-border-radius: 0em !important; 
	border-radius: 0em !important; 
}
/*滚动条鼠标移上去*/
::-webkit-scrollbar-thumb:hover {
	background-color:#bbb !important; 
}

//navbar字体大小
.navbar .links
  font-size: 15.5px !important;

//容器样式
.theorem
  margin 1rem 0
  padding .1rem 1.5rem
  border-radius 0.4rem
  background-color #c9daea61
  .title
    font-weight bold
.custom-block
  &.right
    color transparentify($textColor, 0.4)
    font-size 0.9rem
    text-align right

@require './markdown-container'
```



这里作者还引入了**markdown-container.styl**，需要的自行引入



```stylus
.cardListContainer
  margin .7rem 0
  &>:not(.card-list)
    display none
  .card-list
    margin -0.35rem
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    .card-item
      width calc(100%/3 - .7rem)
      margin auto
      background var(--bodyBg)
      border-radius 3px
      color var(--textColor)
      display flex 
      box-shadow 1px 1px 2px 0 rgba(0,0,0,.06)
      &:hover
        text-decoration none
        img 
          transform rotate(8deg) scale(1.1, 1.1)
          box-shadow 3px 2px 7px rgba(0, 0, 0, 0.15)
        div p
          text-shadow 3px 2px 5px rgba(0, 0, 0, 0.15)
      img
        width 60px
        height 60px
        border-radius 50%
        border 2px solid #fff
        margin 1rem
        margin-right 0
        box-shadow 3px 2px 5px rgba(0, 0, 0, 0.08)
        transition all .4s
      div
        flex 1
        display inline-block
        float right 
        padding 1rem 0
        p
          margin 0
          padding 0 1rem
          transition text-shadow .4s
          text-align center
        .name
          margin .2rem 0 .3rem 0
        .desc
          font-size .8rem
          line-height 1.1rem
          opacity .8
          margin-bottom .2rem
    .card-item.row-1
      width calc(100% - .7rem)
      img
        margin-left 2rem
    .card-item.row-2
      width calc(100%/2 - .7rem)
      img
        margin-left 1.5rem
    .card-item.row-3
      width calc(100%/3 - .7rem)
    .card-item.row-4
      width calc(100%/4 - .7rem)

.cardImgListContainer
  margin 1rem 0
  &>:not(.card-list)
    display none
  .card-list
    margin -0.5rem
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    .card-item
      width calc(100%/3 - 1rem)
      margin .5rem
      background var(--mainBg)
      border 1px solid rgba(0,0,0,0.08)
      box-sizing: border-box
      border-radius 3px
      overflow hidden
      color var(--textColor)
      box-shadow 2px 2px 10px rgba(0,0,0,.04)
      display flex 
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      transition: box-shadow .3s
      &:hover
        box-shadow 1px 1px 20px rgba(0,0,0,.07)
      .box-img
        overflow hidden
        position relative
        background #000
        img
          display block
          width 100%
          height auto
          transition: all .3s
        &:hover
          img
            transform: scale(1.1, 1.1)
            opacity .75
      a
        color var(--textColor)
        transition: color .3s
        &:hover
          color $accentColor
          text-decoration none
      .box-info
        padding: .8rem 1rem
        p
          margin 0
        .desc
          margin-top: .3rem
          opacity .8
          font-size: .9rem
          line-height: 1.1rem
      .box-footer
        overflow hidden
        padding: .8rem 1rem
        border-top:  1px solid rgba(0,0,0,0.05)
        img
          width 1.8rem
          height 1.8rem
          border-radius 50%
          float left
        span 
          line-height 1.8rem
          float left
          margin-left: .6rem
          font-size: .8rem
    .card-item.row-1
      width calc(100% - 1rem)
    .card-item.row-2
      width calc(100%/2 - 1rem)
    .card-item.row-3
      width calc(100%/3 - 1rem)
    .card-item.row-4
      width calc(100%/4 - 1rem)

.theme-mode-dark
  .cardImgListContainer
    .card-list
      .card-item
        border-color: var(--borderColor)
        .box-footer
           border-color: var(--borderColor)
           
// 卡片列表的响应
@media (max-width: 900px) 
  .cardListContainer
    .card-list
      .card-item.row-4
        width calc(100%/3 - .7rem)
  .cardImgListContainer
    .card-list
      .card-item.row-4
        width calc(100%/3 - 1rem)

@media (max-width: 720px) 
  .cardListContainer
    .card-list
      .card-item.row-3, .card-item.row-4
        width calc(100%/2 - .7rem)
        img
          margin-left 1.5rem
  .cardImgListContainer
    .card-list
      .card-item.row-3, .card-item.row-4
        width calc(100%/2 - 1rem)
        
@media (max-width: 500px) 
  .cardListContainer
    .card-list
      .card-item.row-1, .card-item.row-2, .card-item.row-3, .card-item.row-4
        width calc(100% - .7rem)
        img
          margin-left 1.5rem
  .cardImgListContainer
    .card-list
      .card-item.row-1, .card-item.row-2, .card-item.row-3, .card-item.row-4
        width calc(100% - 1rem)
```




***是否可以将颜色与样式写在同一个文件？***

**不可以**将颜色与样式写在同一个文件中，VuePress 会先解析 `palette.styl` 中的全局变量，之后作用于主题的各个样式中，最后才解析 `index.styl` ，以覆盖主题默认的样式。

### 引用脚本与样式

#### 操作说明

这个操作类似butterfly主题中的**inject**，你可以通过配置 `.vuepress/config.js` 中的 `head` 来引入脚本与样式。

通过外挂css和js来对主题样式曾铁，例如点击效果，花瓣雨等等特效。

```js
module.exports = {
  head: [
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" }],
    ["script", { src: "scripts/demo.js" }]
  ]
}
```

比如上面的配置就会被解析为

```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css">
  <script src="scripts/demo.js"></script>
</head>
```

关于 `head` 的详细配置说明请参考[官方文档 head 配置](https://v1.vuepress.vuejs.org/zh/config/#head)

#### 引入鼠标点击效果

在`.vuepress\public\js`文件夹下创建`MouseClickEffect.js`文件，填入以下代码

```js
var a_idx = 0;

function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": `rgb(${getRandom(255,0)},${getRandom(255,0)},${getRandom(255,0)})`,
            "user-select": 'none',
            "cursor": 'default'
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function () {
                $i.remove();
            });
    });
});
```

然后在主题配置文件`config.js`下的`head`引入以上js，这里的jquery必须引入，鼠标点击代码才能生效

```js
  head: [
    // 网页标签栏图标
    ['link', { rel: 'icon', href: '/vuepress/favicon.ico' }],
    // 移动栏优化
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    }],
    // 引入鼠标点击脚本
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }]
  ],
```

### 文章中引入样式和脚本

有时，你可以只想在当前页面应用一些 `JavaScript` 或者 `CSS`，在这种情况下，你可以直接在 `Markdown` 文件中使用原生的 或者 标签，它们将会从编译后的 HTML 文件中提取出来，并作为生成的 Vue 单文件组件的和标签。

**输入**

```html
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

**输出**

这个块是被内联的脚本渲染的，样式也采用了内联样式。

## 推荐插件类

### 我的插件配置

> 所有插件必须要用**中括号包起来**，别问为啥，吃过苦头:dizzy_face:

```js
module.exports = [
    // 流程图插件
    ['flowchart'],
    // 标签加强
    ["vuepress-plugin-boxx" ],
    // 动态标题
    ["dynamic-title",
      {
        showIcon: "vuepress/smile.ico",
        showText: "(/≧▽≦/)欢迎帅哥美女！",
        hideIcon: "vuepress/cry.ico",
        hideText: "(●—●)呜呜，不要走嘛！！",
        recoverTime: 2000
      }],
      // 更新刷新插件
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    }],
    // 代码复制弹窗插件
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
          content: "复制成功!"
      }
    }],
    // 音乐插件
    ['meting', {
        //metingApi: "https://meting.sigure.xyz/api/music",
        meting: {
          // 网易
          server: "netease",
          // 读取歌单
          type: "playlist",
          mid: "696441716",
        },          
        // 不配置该项的话不会出现全局播放器
        aplayer: {
          // 吸底模式
          fixed: true,
          mini: true,
          // 自动播放
          autoplay: true,
          // 歌曲栏折叠
          listFolded:true,
          // 颜色
          theme: '#f9bcdd',
          // 播放顺序为随机
          order: 'random',
          // 初始音量
          volume: 0.1,
          // 关闭歌词显示
          lrcType: 0
        },
        mobile :{
          // 手机端去掉cover图
          cover: false,
        }
      }]
    /* 弹窗公告插件
    [
      "@vuepress-yard/vuepress-plugin-window"
    ], */
    /* 音乐插件   
    ["@vuepress-reco/vuepress-plugin-bgm-player",
          {
            audios: [
              // 网络文件示例
              {
                name: '年轮',
                artist: '张碧晨',
                url: 'https://cdn.jsdelivr.net/gh/fudalijunyi/cdn/MP3/年轮.mp3',
                cover: 'https://cdn.jsdelivr.net/gh/fudalijunyi/picture-bed/img/20200715154924.png'
              }
            ] ,
            // 自动缩小
            autoShrink:true ,
            // 悬浮窗模式，吸边
            shrinkMode: 'float' ,
            // 悬浮窗位置
            floatStyle:{ bottom: '10px', 'z-index': '999999' },

          }],*/
]
```

### 音乐插件

目前音乐插件有两种：

1. [bgm-player](https://github.com/vuepress-reco/vuepress-plugin-bgm-player)，一款简洁易用的音乐插件，优势是好看，其他一无是处了:slightly_smiling_face:
2. [music-bar](https://www.npmjs.com/package/vuepress-plugin-music-bar)，一个程序猿自己开发的插件，除本地，网络音频之外还支持从平台歌单获取链接(目前仅支持网易云音乐)，缺点是丑了点，支持一下这位老哥:dancers:
3. [meting](https://github.com/moefyit/vuepress-plugin-meting)，​在hexo上就一直用的插件，功能强大，配置丰富，目前应该最大强大的音乐插件了，我用的就是这个，强推:+1:，还支持在markdown中直接插入，操作如下

```
<Meting server="netease"
        type="playlist"
        mid="2539599584"
        :lrc-type="3"/>
```


这里再推荐一个音乐外链网：http://music.xf1433.com/

### 趣味标题插件

这个在hexo已经很熟悉了，主要在标签栏当时选中和离开页面时会有变化

#### 安装

```bash
npm i vuepress-plugin-dynamic-title -D
```

#### 使用

```js
module.exports = {
  plugins: [
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ]
  ]
}
```

### Boxx插件

参考：https://zpj80231.gitee.io/znote/views/front-end/vuepress-plugin-boxx.html

可以为博客文章自动随机添加名人名言或其他，可自定义样式和内容

#### 安装

- 在文件`package.json`中的`devDependencies`下加入`"vuepress-plugin-boxx": "0.0.7"`：

```json
"devDependencies": {
    "vuepress-plugin-boxx": "0.0.7"
}
```

- 在 vuepress 的`config.js`中配置`plugins`：

```json
plugins: [
    ["vuepress-plugin-boxx"]
],
```

- 在`package.json`目录下执行命令：`npm install`
- 正常启动项目，接着如下使用即可

#### 使用

- 引入：只需在你想要插入的地方加入`<Boxx/>`即可（如顶部所示）
- 内容：默认随机展示名人名句，支持自定义
- 样式：有三种样式，默认为 tip 样式，支持自定义
- 注意：除`<Boxx/>`这个标签是必须外，标签属性均为可选，所有标签属性会在下文中详细介绍

#### 默认样式

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Z1ZGFsaWp1bnlpL3BpY3R1cmUtYmVkL2ltZy8yMDIwMDcxNDE0NDkwMC5wbmc?x-oss-process=image/format,png)

#### 自定义标题和内容

- 如果默认的名人名句不满足需求的话，自定义只需指定两个属性`title`和`content`的值

| Name    | Type   | Description                           |
| ------- | ------ | ------------------------------------- |
| title   | String | 要展示的`title`的内容，支持html标签   |
| content | String | 要展示的`content`的内容，支持html标签 |

- 当然你也可以只输入`title`或`content`，如下：

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Z1ZGFsaWp1bnlpL3BpY3R1cmUtYmVkL2ltZy8yMDIwMDcxNDE0NTA1My5wbmc?x-oss-process=image/format,png)

#### 自定义样式

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Z1ZGFsaWp1bnlpL3BpY3R1cmUtYmVkL2ltZy8yMDIwMDcxNDE0NTIwMS5wbmc?x-oss-process=image/format,png)

- 可以通过以下几个属性实现

| Name         | Type   | Description                            |
| :----------- | ------ | -------------------------------------- |
| blockStyle   | Object | 整体块元素的样式                       |
| titleStyle   | Object | 只针对`title`的样式                    |
| contentStyle | Object | 只针对`content`的样式                  |
| changeTime   | Number | 以毫秒值为单位的动态变化时间，顶部为例 |

需要注意的是：属性值传输的对象只能通过`v-bind:`绑定来实现

- 以下是对如上样式的示例，在Markdown中这样书写即可：

```javascript
<marquee>
<Boxx :blockStyle="blockStyle"  />
<Boxx type="warning" :blockStyle="titleStyle" :titleStyle="titleStyle" changeTime="1000" title="我是一个大大的且变化的 title"/>
<Boxx type="danger" :blockStyle="contentStyle" :contentStyle="contentStyle" content="我是一个小小的<br><marquee>content</marquee>"/>
</marquee>

<script>
	export default {
		data() {
			return {
				blockStyle: {'background':'#eee','color':'red'},
                titleStyle: {'margin-right': '10%','font-size':'16px'},
                contentStyle: {'margin-right': '20%','font-size':'10px',
                               "margin-top": "1rem","margin-bottom": "0.4rem"},
			}
		}
	}
</script>
```

### PWA插件

#### 安装

```bash
npm install -D @vuepress/plugin-pwa
```

#### 使用

本选项开启了一个用于刷新内容的弹窗。这个弹窗将会在站点有内容更新时显示出来，并提供了一个 `refresh` 按钮，允许用户立即刷新内容。

> 如果没有“刷新”按钮，则只有在所有的 [Clients](https://developer.mozilla.org/en-US/docs/Web/API/Clients) 被关闭后，新的 Service Worker 才会处于活动状态。这意味着用户在关闭你网站的所有标签之前无法看到新内容。但是 `refresh` 按钮会立即激活新的 Service Worker。

```js
['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    }],
```

### 复制弹窗插件

#### 安装

```bash
npm install -D vuepress-plugin-nuggets-style-copy
```

#### 使用

```js
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
          content: "复制成功!"
      }
    }]
```

### 公告弹窗插件

#### 演示

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Z1ZGFsaWp1bnlpL3BpY3R1cmUtYmVkL2ltZy8yMDIwMDcxNTIyNDU1MC5wbmc?x-oss-process=image/format,png)

#### 下载

https://www.npmjs.com/package/@vuepress-yard/vuepress-plugin-window 

## 修改源码

不到**迫不得已**还是不要修改源码，我主要是因为使用分组的侧边栏后，如果嵌套的内容标题下，不加这个**path**参数(如果加了每次点侧边栏标题都会转跳，非常难受)，颜色就会偏淡，通过上文中`index.styl`无论如何也不能加深

```js
            children: [
                {
                    title: 'Matplotlib',   // 必要的
                    //path: '',  // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: true, // 可选的, 默认值是 true,
                    children: [
                        'Python/Matplotlib/Matplotlib绘图指南',
                        'webc/01.Requests使用技巧',
                        'webc/02.数据存入Excel',
                    ]
```

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Z1ZGFsaWp1bnlpL3BpY3R1cmUtYmVkL2ltZy8yMDIwMDcxMTE3NDAxOC5wbmc?x-oss-process=image/format,png)

通过全局搜索，终于找到在源码文件`\xxx\blog\node_modules\vuepress-theme-reco\components\SidebarGroup.vue`中发现问题，罪魁祸首就是这个`opacity 0.5`，致此，将其改成1即可，虽然简单，但是对于有页面强迫症的我，确实是极大的舒适。

```stylus
.sidebar-group
  background var(--background-color)
  .sidebar-group
    padding-left 0.5em
  &:not(.collapsable)
    .sidebar-heading:not(.clickable)
      cursor auto
      color var(--text-color)
  // refine styles of nested sidebar groups
  &.is-sub-group
    padding-left 0
    & > .sidebar-heading
      font-size 0.95em
      line-height 1.4
      font-weight normal
      padding-left 2rem
      &:not(.clickable)
        opacity 0.5
    & > .sidebar-group-items
      padding-left 1rem
      & > li > .sidebar-link
        font-size: 0.95em;
```

## 参考资料

znote：https://zpj80231.gitee.io/znote/views/front-end/vuepress-plugin-boxx.html
vuepress-theme-reco：https://vuepress-theme-reco.recoluan.com/






