import{_ as i,c as r,a as n,b as e,d as s,e as t,f as p,r as o,o as k}from"./app-BB_ZjxFs.js";const d={},g={class:"custom-container warning"},m={href:"https://carbondesignsystem.com/elements/icons/library/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.xicons.org/#/zh-CN",target:"_blank",rel:"noopener noreferrer"};function h(q,a){const l=o("ExternalLinkIcon"),c=o("CodeGroupItem"),u=o("CodeGroup");return k(),r("div",null,[a[11]||(a[11]=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍"},[n("span",null,"介绍")])],-1)),n("div",g,[a[5]||(a[5]=e('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">警告</p>',2)),n("p",null,[a[1]||(a[1]=s("原来 reco 主题的图标只集成了 ")),n("a",m,[a[0]||(a[0]=s("Carbon")),t(l)]),a[2]||(a[2]=s(" 1 种图标，因为定制能力受限，")),a[3]||(a[3]=n("code",null,"2.0.0-rc.23",-1)),a[4]||(a[4]=s(" 版本之后，reco 主题不再内置图标，而是允许用户定制任何自己想要的图标。"))])]),a[12]||(a[12]=n("h2",{id:"使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用"},[n("span",null,"使用")])],-1)),a[13]||(a[13]=n("h3",{id:"注册图标组件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#注册图标组件"},[n("span",null,"注册图标组件")])],-1)),a[14]||(a[14]=n("p",null,[s("在 "),n("code",null,".vuepress/components"),s(" 下注册图标组件，比如新增一个 "),n("code",null,"IconHome.vue"),s("：")],-1)),n("blockquote",null,[n("p",null,[a[7]||(a[7]=s("svg 可以去 ")),n("a",v,[a[6]||(a[6]=s("Xicons")),t(l)]),a[8]||(a[8]=s(" 获取，其他 svg 资源均可。"))])]),a[15]||(a[15]=e(`<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2000/svg<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xlink</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/1999/xlink<span class="token punctuation">&quot;</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0 0 32 32<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428zM18 26h-4v-8h4zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26z<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentColor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用图标组件" tabindex="-1"><a class="header-anchor" href="#使用图标组件"><span>使用图标组件</span></a></h3>`,2)),t(u,null,{default:p(()=>[t(c,{title:"在 config 文件中使用"},{default:p(()=>a[9]||(a[9]=[n("div",{class:"language-typescript line-numbers-mode","data-highlighter":"prismjs","data-ext":"ts","data-title":"ts"},[n("pre",null,[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vuepress'")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(" recoTheme "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vuepress-theme-reco'")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" viteBundler "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@vuepress/bundler-vite'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  bundler"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"viteBundler"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"recoTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    navbar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(" text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'首页'"),n("span",{class:"token punctuation"},","),s(" link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/'"),n("span",{class:"token punctuation"},","),s(" icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'IconHome'"),s(),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),t(c,{title:"在 mackdown 中使用"},{default:p(()=>a[10]||(a[10]=[n("div",{class:"language-markdown line-numbers-mode","data-highlighter":"prismjs","data-ext":"md","data-title":"md"},[n("pre",null,[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Xicons")]),s(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("IconHome"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")])]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"})])],-1)])),_:1})]),_:1}),a[16]||(a[16]=e(`<h2 id="高级" tabindex="-1"><a class="header-anchor" href="#高级"><span>高级</span></a></h2><p>如果想要在自定义组件或 markdown 中直接使用 svg 图标：</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Xicons</span> <span class="token attr-name">:text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>copyRight<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xicon-icon<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span> <span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2000/svg<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xlink</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/1999/xlink<span class="token punctuation">&quot;</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0 0 24 24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>none<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentColor<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stroke-linecap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>round<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stroke-linejoin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>round<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>9<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>circle</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>M14 9.75a3.016 3.016 0 0 0-4.163.173a2.993 2.993 0 0 0 0 4.154A3.016 3.016 0 0 0 14 14.25<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Xicons</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>icon</td><td>图标</td><td>string</td><td>自定义的图标组件名称</td><td>-</td></tr><tr><td>color</td><td>图标和文本的颜色</td><td>string</td><td>-</td><td>inherit</td></tr><tr><td>iconPosition</td><td>图标的位置，同时设置了 icon 和 text 时才有意义</td><td>string</td><td>top/bottom/left/right</td><td>left</td></tr><tr><td>iconSize</td><td>图标的大小</td><td>string</td><td>-</td><td>18</td></tr><tr><td>text</td><td>文本的内容</td><td>string</td><td>-</td><td>-</td></tr><tr><td>textSize</td><td>文本的大小</td><td>string</td><td>-</td><td>14</td></tr><tr><td>link</td><td>跳转链接</td><td>string</td><td>-</td><td>javascript:void(0)</td></tr><tr><td>target</td><td>跳转方式</td><td>string</td><td><code>_self</code>,<code>_blank</code>,<code>_parent</code>,<code>_top</code></td><td>_self</td></tr></tbody></table><h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>指定 props.text 位置的内容，用于表达更加复杂的内容</td></tr><tr><td>icon</td><td>通过外部图标来替换</td></tr></tbody></table>`,8))])}const x=i(d,[["render",h],["__file","icon.html.vue"]]),w=JSON.parse('{"path":"/docs/guide/icon.html","title":"图标","lang":"zh-CN","frontmatter":{"title":"图标","date":"2023-01-23T00:00:00.000Z"},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"注册图标组件","slug":"注册图标组件","link":"#注册图标组件","children":[]},{"level":3,"title":"使用图标组件","slug":"使用图标组件","link":"#使用图标组件","children":[]}]},{"level":2,"title":"高级","slug":"高级","link":"#高级","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]}]}],"git":{"createdTime":1736697917000,"updatedTime":1736697917000,"contributors":[{"name":"Reco","email":"recoluan@qq.com","commits":1}]},"filePathRelative":"docs/guide/icon.md"}');export{x as comp,w as data};