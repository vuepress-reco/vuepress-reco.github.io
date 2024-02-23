import{_ as e,r as p,o,c,b as n,d as s,e as i,w as l,a}from"./app-v4RMp1pm.js";const u={},r=a(`<h2 id="types" tabindex="-1"><a class="header-anchor" href="#types" aria-hidden="true">#</a> Types</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">NavbarItemBasic</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">NavbarItem</span> <span class="token keyword">extends</span> <span class="token class-name">NavbarItemBasic</span> <span class="token punctuation">{</span>
  children<span class="token operator">?</span><span class="token operator">:</span> NavbarItemBasic<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Navbar</span> <span class="token operator">=</span> NavbarItem<span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),k={class:"custom-container tip"},d=n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])],-1),v=n("p",{class:"custom-container-title"},"TIP",-1),m=a(`<h2 id="refer" tabindex="-1"><a class="header-anchor" href="#refer" aria-hidden="true">#</a> Refer</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> navbar <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Guide&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/en/docs/guide/introduce&#39;</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">&#39;Compass&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&#39;Reference&#39;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&#39;Document&#39;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&#39;Configuration&#39;</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Theme Configuration&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/en/docs/theme/frontmatter&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            text<span class="token operator">:</span> <span class="token string">&#39;Markdown Extension&#39;</span><span class="token punctuation">,</span>
            link<span class="token operator">:</span> <span class="token string">&#39;/en/docs/theme/custom-container&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Advance&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/en/docs/theme/custom-catalog-title&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&#39;Plugins&#39;</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/en/docs/plugins/page&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;comments&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/en/docs/plugins/comments&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;vue-previews&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/en/docs/plugins/vue-previews&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            text<span class="token operator">:</span> <span class="token string">&#39;bulletin-popover&#39;</span><span class="token punctuation">,</span>
            link<span class="token operator">:</span> <span class="token string">&#39;/en/docs/plugins/bulletin-popover&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&#39;Version&#39;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&#39;SubVolume&#39;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;2.x(alpha)&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;https://vuepress-theme-reco.recoluan.com/en/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&#39;1.x&#39;</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">&#39;https://vuepress-theme-reco.recoluan.com/en/views/1.x/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&#39;Message board&#39;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&#39;/en/docs/message-board&#39;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&#39;Chat&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function b(g,h){const t=p("RouterLink");return o(),c("div",null,[r,n("div",k,[d,v,n("p",null,[s("For more information on setting icons, please see "),i(t,{to:"/docs/guide/icon.html"},{default:l(()=>[s("Guide-> Icon")]),_:1})])]),m])}const _=e(u,[["render",b],["__file","navbar.html.vue"]]);export{_ as default};
