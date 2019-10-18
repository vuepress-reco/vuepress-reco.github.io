---
title: 评论(valine)
date: 2019-04-09
---

带有内置了valine评论功能，如果要打开此功能，只需配置你的 `config.js`

```javscript
// 更改 /docs/.vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    // valine
    valineConfig: {
      appId: '...',// your appId
      appKey: '...', // your appKey
    }
  }  
}
```

**参数**

|参数|功能|默认值|是否必填|
|:-: | - | :-: | :-: |
|appId|从LeanCloud的应用中得到的appId|无|yes|
|appKey|从LeanCloud的应用中得到的APP Key|无|yes|
|placeholder|评论框占位提示符|just go go|no|
|notify|评论回复邮件提醒，请参考[配置](https://github.com/xCss/Valine/wiki/Valine-%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F%E4%B8%AD%E7%9A%84%E9%82%AE%E4%BB%B6%E6%8F%90%E9%86%92%E8%AE%BE%E7%BD%AE)|false|no|
|verify|验证码服务|false|no|
|avatar|Gravatar 头像展示方式，更多信息请查看[头像配置](https://valine.js.org/avatar.html)|retro|no|
|visitor|文章访问量统计|true|no|
|recordIP|recordIP|false|no|

> 如果 valine 的获取评论的接口报 `404` 错误的话，不用担心，这是因为你还没有添加评论，只要存在1条评论，就不会报错了，这是 `leanCloud` 的请求处理操作而已。