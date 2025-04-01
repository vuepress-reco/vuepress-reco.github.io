import{_ as i,c as r,a as n,b as e,e as t,d as s,w as p,r as o,o as d}from"./app-BpsSiNYw.js";const k={},g={class:"custom-container warning"},m={href:"https://carbondesignsystem.com/elements/icons/library/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.xicons.org/#/zh-CN",target:"_blank",rel:"noopener noreferrer"};function v(b,a){const l=o("ExternalLinkIcon"),c=o("CodeGroupItem"),u=o("CodeGroup");return d(),r("div",null,[a[11]||(a[11]=n("h2",{id:"introduction",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#introduction"},[n("span",null,"Introduction")])],-1)),n("div",g,[a[5]||(a[5]=e('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p>',2)),n("p",null,[a[1]||(a[1]=s("Originally, the reco theme's icons only integrated one type of icon ")),n("a",m,[a[0]||(a[0]=s("Carbon")),t(l)]),a[2]||(a[2]=s(". Due to limited customization capabilities, after the ")),a[3]||(a[3]=n("code",null," 2.0.0-rc.23",-1)),a[4]||(a[4]=s(" version, the reco theme no longer has built-in icons, but allows users to customize any icon they want."))])]),a[12]||(a[12]=n("h2",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage"},[n("span",null,"Usage")])],-1)),a[13]||(a[13]=n("h3",{id:"registrater-icon-component",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#registrater-icon-component"},[n("span",null,"Registrater icon component")])],-1)),a[14]||(a[14]=n("p",null,[s("Register icon components under "),n("code",null,".vuepress/components"),s(", such as adding an "),n("code",null,"IconHome.vue"),s(":")],-1)),n("blockquote",null,[n("p",null,[a[7]||(a[7]=s("svg 可以去 ")),n("a",h,[a[6]||(a[6]=s("Xicons")),t(l)]),a[8]||(a[8]=s(" 获取，其他 svg 资源均可。"))])]),a[15]||(a[15]=e(`<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2000/svg<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xlink</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/1999/xlink<span class="token punctuation">&quot;</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0 0 32 32<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428zM18 26h-4v-8h4zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26z<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentColor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用图标组件" tabindex="-1"><a class="header-anchor" href="#使用图标组件"><span>使用图标组件</span></a></h3>`,2)),t(u,null,{default:p(()=>[t(c,{title:"Using in config file"},{default:p(()=>a[9]||(a[9]=[n("div",{class:"language-typescript line-numbers-mode","data-highlighter":"prismjs","data-ext":"ts"},[n("pre",null,[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vuepress'")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(" recoTheme "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vuepress-theme-reco'")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" viteBundler "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@vuepress/bundler-vite'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  bundler"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"viteBundler"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"recoTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    navbar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(" text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Home'"),n("span",{class:"token punctuation"},","),s(" link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/'"),n("span",{class:"token punctuation"},","),s(" icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'IconHome'"),s(),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),t(c,{title:"Use in mackdown"},{default:p(()=>a[10]||(a[10]=[n("div",{class:"language-markdown line-numbers-mode","data-highlighter":"prismjs","data-ext":"md"},[n("pre",null,[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Xicons")]),s(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("IconHome"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")])]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"})])],-1)])),_:1})]),_:1}),a[16]||(a[16]=e(`<h2 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced"><span>Advanced</span></a></h2><p>If you want to use the svg icon directly in a custom component or markdown:</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Xicons</span> <span class="token attr-name">:text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>copyRight<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xicon-icon<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span> <span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2000/svg<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xlink</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/1999/xlink<span class="token punctuation">&quot;</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0 0 24 24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>none<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentColor<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stroke-linecap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>round<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stroke-linejoin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>round<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>9<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>circle</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>M14 9.75a3.016 3.016 0 0 0-4.163.173a2.993 2.993 0 0 0 0 4.154A3.016 3.016 0 0 0 14 14.25<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Xicons</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference"><span>Reference</span></a></h2><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3><table><thead><tr><th>Params</th><th>Description</th><th>Type</th><th>Optional</th><th>Default</th></tr></thead><tbody><tr><td>icon</td><td>Icon</td><td>string</td><td>The Name of customed icon component</td><td>-</td></tr><tr><td>color</td><td>Color of icon and text</td><td>string</td><td>-</td><td>inherit</td></tr><tr><td>iconPosition</td><td>The position of icon, this makes sense when both icon and text are set</td><td>string</td><td>top/bottom/left/right</td><td>left</td></tr><tr><td>iconSize</td><td>The size of icon</td><td>string</td><td>-</td><td>18</td></tr><tr><td>text</td><td>The content of text</td><td>string</td><td>-</td><td>-</td></tr><tr><td>textSize</td><td>The size of text</td><td>string</td><td>-</td><td>14</td></tr><tr><td>link</td><td>Jump link</td><td>string</td><td>-</td><td>javascript:void(0)</td></tr><tr><td>target</td><td>Jump method</td><td>string</td><td>_self/_blank/_parent/_top</td><td>_self</td></tr></tbody></table><h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Specify the contents of the props.text position to express more complex content</td></tr><tr><td>icon</td><td>Replace with an external icon</td></tr></tbody></table>`,8))])}const f=i(k,[["render",v]]),x=JSON.parse('{"path":"/en/docs/guide/icon.html","title":"Icon","lang":"en-US","frontmatter":{"title":"Icon","date":"2023-01-23T00:00:00.000Z"},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Registrater icon component","slug":"registrater-icon-component","link":"#registrater-icon-component","children":[]},{"level":3,"title":"使用图标组件","slug":"使用图标组件","link":"#使用图标组件","children":[]}]},{"level":2,"title":"Advanced","slug":"advanced","link":"#advanced","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]}]}],"git":{"createdTime":1743533609000,"updatedTime":1743533609000,"contributors":[{"name":"Reco","username":"Reco","email":"recoluan@qq.com","commits":1,"url":"https://github.com/Reco"}]},"filePathRelative":"en/docs/guide/icon.md"}');export{f as comp,x as data};
