import{_ as i,c as l,a as n,b as a,d as e,e as p,f as c,r,o}from"./app-BB_ZjxFs.js";const d={},u={class:"custom-container tip"};function m(v,s){const t=r("RouteLink");return o(),l("div",null,[s[4]||(s[4]=n("h2",{id:"快速开始",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#快速开始"},[n("span",null,"快速开始")])],-1)),n("div",u,[s[3]||(s[3]=a('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">提示</p>',2)),n("p",null,[s[1]||(s[1]=e("前往 ")),p(t,{to:"/docs/guide/gui-builder.html"},{default:c(()=>s[0]||(s[0]=[e("这里")])),_:1}),s[2]||(s[2]=e(" 体验全新可视化搭建脚手架。"))])]),s[5]||(s[5]=a(`<p><strong>npx</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 初始化，并选择 2.x</span></span>
<span class="line">npx @vuepress-reco/theme-cli init</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>npm</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 初始化，并选择 2.x</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> @vuepress-reco/theme-cli@1.0.7 <span class="token parameter variable">-g</span></span>
<span class="line">theme-cli init</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yarn</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 初始化，并选择 2.x</span></span>
<span class="line"><span class="token function">yarn</span> global <span class="token function">add</span> @vuepress-reco/theme-cli@1.0.7</span>
<span class="line">theme-cli init</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装"><span>手动安装</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> vuepress@next vuepress-theme-reco@next --save-dev</span>
<span class="line"></span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token function">yarn</span> <span class="token function">add</span> vuepress@next vuepress-theme-reco@next</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token comment">// .vuepress/config.ts</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// options</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9))])}const g=i(d,[["render",m],["__file","getting-started.html.vue"]]),k=JSON.parse('{"path":"/docs/guide/getting-started.html","title":"快速开始","lang":"zh-CN","frontmatter":{"title":"快速开始","date":"2021-11-05T00:34:35.000Z"},"headers":[{"level":2,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[]},{"level":2,"title":"手动安装","slug":"手动安装","link":"#手动安装","children":[]}],"git":{"createdTime":1736697917000,"updatedTime":1736697917000,"contributors":[{"name":"Reco","email":"recoluan@qq.com","commits":1}]},"filePathRelative":"docs/guide/getting-started.md"}');export{g as comp,k as data};