import{_ as n,c as a,b as e,o as i}from"./app-DqNLHUev.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>为了节约用户的时间成本，主题可以自动将 <code>series</code> 文件夹下的文档，按照文件夹嵌套关系生成系列的配置。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">/</span>
<span class="line">└─ .vuepress</span>
<span class="line">└─ series</span>
<span class="line">  └─ 系列1</span>
<span class="line">    └─ 文档1.md</span>
<span class="line">    └─ 文档2.md</span>
<span class="line">  └─ 系列2</span>
<span class="line">    └─ 分组1</span>
<span class="line">      └─ 文档3.md</span>
<span class="line">    └─ 分组2</span>
<span class="line">      └─ 文档4.md</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 自动设置分类</span></span>
<span class="line">    autoSetSeries<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const r=n(l,[["render",p]]),o=JSON.parse('{"path":"/docs/theme/auto-set-series.html","title":"自动设置系列","lang":"zh-CN","frontmatter":{"title":"自动设置系列","date":"2023-02-17T00:00:00.000Z"},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]}],"git":{"createdTime":1676568769000,"updatedTime":1715447012000,"contributors":[{"name":"reco_luan","username":"","email":"recoluan@qq.com","commits":2}]},"filePathRelative":"docs/theme/auto-set-series.md"}');export{r as comp,o as data};
