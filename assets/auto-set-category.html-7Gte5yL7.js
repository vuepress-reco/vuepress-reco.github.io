import{_ as a,o as e,c as t,a as s,b as n,d as o}from"./app-v4RMp1pm.js";const c={},i=s(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>为了节约用户的时间成本，主题可以自动为 <code>blogs</code> 文件夹下的博客设置分类，也就是将该文件所在文件夹的名称设置为该文件的 <code>frontmatter</code> 的 <code>categories</code> 的值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/
└─ .vuepress
└─ blogs
  └─ 分类1
    └─ 博客1.md
  └─ 分类2
    └─ 博客2.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>`,4),p=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"WARNING"),n("p",null,[n("code",null,"autoAddCategoryToNavbar"),o(" API 后期会做调整，但不会废弃，请谨慎使用。")])],-1),l=s(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 自动设置分类</span>
    autoSetBlogCategories<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 自动将分类和标签添加至头部导航条</span>
    autoAddCategoryToNavbar<span class="token operator">:</span> <span class="token punctuation">{</span>
      location<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 默认 0</span>
      categoryText<span class="token operator">:</span> <span class="token string">&#39;分类&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认 categories</span>
      tagText<span class="token operator">:</span> <span class="token string">&#39;标签&#39;</span> <span class="token comment">// 默认 tags</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 当 autoAddCategoryToNavbar 为 true 时，则全部取默认值</span>
    autoAddCategoryToNavbar<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),r=[i,p,l];function d(u,v){return e(),t("div",null,r)}const k=a(c,[["render",d],["__file","auto-set-category.html.vue"]]);export{k as default};
