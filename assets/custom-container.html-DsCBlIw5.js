import{_ as o,c as r,b as p,e as a,f as l,r as t,o as d,a as s,d as e}from"./app-BB_ZjxFs.js";const u={};function m(v,n){const i=t("CodeGroupItem"),c=t("CodeGroup");return d(),r("div",null,[n[2]||(n[2]=p(`<h2 id="提示相关" tabindex="-1"><a class="header-anchor" href="#提示相关"><span>提示相关</span></a></h2><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line">::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span> [title]</span>
<span class="line">[content]</span>
<span class="line">:::</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>type</code> 是必需的， <code>title</code> 和 <code>content</code> 是可选的。</p><p>支持的 <code>type</code> 有：</p><ul><li><code>tip</code></li><li><code>warning</code></li><li><code>danger</code></li><li><code>details</code></li></ul><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line">::: tip</span>
<span class="line">这是一个提示</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: info</span>
<span class="line">这是一个提示</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: warning</span>
<span class="line">这是一个警告</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: danger</span>
<span class="line">这是一个危险警告</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: details</span>
<span class="line">这是一个 details 标签</span>
<span class="line">:::</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">提示</p><p>这是一个提示</p></div><div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">信息</p><p>这是一个提示</p></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">警告</p><p>这是一个警告</p></div><div class="custom-container danger"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M10 10l4 4m0-4l-4 4"></path></g></svg><p class="custom-container-title">危险</p><p>这是一个危险警告</p></div><details class="custom-container details"><summary class="custom-container-title">详情</summary><p>这是一个 details 标签</p></details><h2 id="代码相关" tabindex="-1"><a class="header-anchor" href="#代码相关"><span>代码相关</span></a></h2><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line">:::: code-group</span>
<span class="line">::: code-group-item FOO</span>
<span class="line"><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span></span>
<span class="line"><span class="token code-block language-js"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span></span></span>
<span class="line"><span class="token punctuation">\`\`\`</span></span></span>
<span class="line">:::</span>
<span class="line">::: code-group-item BAR</span>
<span class="line"><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span></span>
<span class="line"><span class="token code-block language-js"><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span></span></span>
<span class="line"><span class="token punctuation">\`\`\`</span></span></span>
<span class="line">:::</span>
<span class="line">::::</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p>`,17)),a(c,null,{default:l(()=>[a(i,{title:"FOO"},{default:l(()=>n[0]||(n[0]=[s("div",{class:"language-javascript line-numbers-mode","data-highlighter":"prismjs","data-ext":"js","data-title":"js"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token keyword"},"const"),e(" foo "),s("span",{class:"token operator"},"="),e(),s("span",{class:"token string"},"'foo'")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1)])),_:1}),a(i,{title:"BAR"},{default:l(()=>n[1]||(n[1]=[s("div",{class:"language-javascript line-numbers-mode","data-highlighter":"prismjs","data-ext":"js","data-title":"js"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token keyword"},"const"),e(" bar "),s("span",{class:"token operator"},"="),e(),s("span",{class:"token string"},"'bar'")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1)])),_:1})]),_:1})])}const h=o(u,[["render",m],["__file","custom-container.html.vue"]]),k=JSON.parse('{"path":"/docs/theme/custom-container.html","title":"自定义容器","lang":"zh-CN","frontmatter":{"title":"自定义容器","date":"2022-01-29T16:19:01.000Z"},"headers":[{"level":2,"title":"提示相关","slug":"提示相关","link":"#提示相关","children":[]},{"level":2,"title":"代码相关","slug":"代码相关","link":"#代码相关","children":[]}],"git":{"createdTime":1736697917000,"updatedTime":1736697917000,"contributors":[{"name":"Reco","email":"recoluan@qq.com","commits":1}]},"filePathRelative":"docs/theme/custom-container.md"}');export{h as comp,k as data};