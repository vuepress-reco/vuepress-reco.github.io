import{_ as n,c as e,b as a,o as i}from"./app-DXyB3U1V.js";const t={};function l(c,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>In order to save users&#39; time cost, the theme can automatically generate a series of configurations for the documents under the <code>series</code> folder according to the folder nesting relationship.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/</span>
<span class="line">└─ .vuepress</span>
<span class="line">└─ series</span>
<span class="line">  └─ sery 1</span>
<span class="line">    └─ doc1.md</span>
<span class="line">    └─ doc2.md</span>
<span class="line">  └─ sery 2</span>
<span class="line">    └─ group1</span>
<span class="line">      └─ doc3.md</span>
<span class="line">    └─ group2</span>
<span class="line">      └─ doc4.md</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configure" tabindex="-1"><a class="header-anchor" href="#configure"><span>Configure</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// auto set series</span></span>
<span class="line">    autoSetSeries<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const o=n(t,[["render",l]]),r=JSON.parse('{"path":"/en/docs/theme/auto-set-series.html","title":"Auto Set Series","lang":"en-US","frontmatter":{"title":"Auto Set Series","date":"2023-02-17T00:00:00.000Z"},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Configure","slug":"configure","link":"#configure","children":[]}],"git":{"createdTime":1747990935000,"updatedTime":1747990935000,"contributors":[{"name":"三人","username":"","email":"stwangcq@163.com","commits":1}]},"filePathRelative":"en/docs/theme/auto-set-series.md"}');export{o as comp,r as data};
