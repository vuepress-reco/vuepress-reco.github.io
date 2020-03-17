---
home: true
heroImage: /icon_vuepress_reco.png
heroImageStyle: {
  maxWidth: '200px',
  width: '100%',
  display: block,
  margin: '5rem auto 2rem',
  borderRadius: '1rem',
}
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
features:
- title: 过去
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题。
- title: 当下
  details: 帮助更多的朋友节省时间去用心书写内容，而不是仅仅配置一个博客去孤芳自赏。
- title: 未来
  details: 吸引更多的朋友参与到开发中来，继续强大功能。
---

## 更新记录 [更多+](/views/other/notice)

::: tip
**[2020-03-16]** 更新 `1.3.2`

1. 【优化】暗色模式字体颜色
2. 【修复】暗色模式初始化无效

---

**[2020-03-15]** 更新 `1.3.0`

1. 【修复】详情页评论块无加载动画
2. 【修复】刷新按钮的暗色适配
3. 【增加】增加容器 `right`, `theorem`, `details` [文档](/views/1.x/syntax.html#容器) [@franklinqin0](https://github.com/franklinqin0)
4. 【增加】增加 tagline（首页的描述）并可以通过 null 来关闭 [文档](https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)
5. 【增加】增加暗色模式初始化配置 [文档](/views/1.x/mode.html#初始化)
6. 【重构】密码需要再设置中设置 `MD5` 加密后的32位密文 [文档](/views/1.x/password.html#设置密文)
7. 【重构】滚动条样式
:::

## 快速开始

**npx**

```
npx @vuepress-reco/theme-cli init my-blog
```

**npm**

```bash
# 初始化
npm install @vuepress-reco/theme-cli -g
theme-cli init my-blog

# 安装
cd my-blog
npm install

# 运行
npm run dev

# 编译
npm run build
```

**yarn**

```bash
# 初始化
yarn global add @vuepress-reco/theme-cli
theme-cli init my-blog

# 安装
cd my-blog
yarn install
```

## 贡献者

<Contributors user="vuepress-reco" repo="vuepress-theme-reco" :show-title="true"></Contributors>
<Contributors user="vuepress-reco" repo="vuepress-reco.github.io" :show-title="true"></Contributors>
