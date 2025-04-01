import{_ as e,c as o,a as n,b as p,d as t,e as i,r as d,o as l}from"./app-BpsSiNYw.js";const r={},c={href:"https://v2.vuepress.vuejs.org/guide/i18n.html",target:"_blank",rel:"noopener noreferrer"};function u(g,s){const a=d("ExternalLinkIcon");return l(),o("div",null,[s[3]||(s[3]=n("p",null,"These options configure locale-related texts.",-1)),s[4]||(s[4]=n("p",null,"If your site is served in a different language besides English, you should set these options per locale to provide translations.",-1)),n("blockquote",null,[n("p",null,[s[1]||(s[1]=t("Please refer to ")),n("a",c,[s[0]||(s[0]=t("Official Documentation")),i(a)]),s[2]||(s[2]=t(" for detailed i18n config."))])]),s[5]||(s[5]=p(`<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><table><thead><tr><th>Options</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>categoriesText</td><td><code>string</code></td><td>Categories</td><td>categories</td></tr><tr><td>tagsText</td><td><code>string</code></td><td>Tags</td><td>tags</td></tr><tr><td>catalogTitle</td><td><code>string</code></td><td>ON THIS PAGE</td><td>The title of the table of contents on the right of the article</td></tr><tr><td>selectLanguageName</td><td><code>string</code></td><td>\${lang}</td><td>Language name of Locale</td></tr><tr><td>editLinkText</td><td><code>string</code></td><td>Edit this page</td><td>Edit the text of the link on this pag</td></tr><tr><td>lastUpdatedText</td><td><code>string</code></td><td>Last Updated</td><td>The text of the recently updated timestamp label</td></tr><tr><td>tip</td><td><code>string</code></td><td>TIP</td><td>Customize the title of the tip container</td></tr><tr><td>info</td><td><code>string</code></td><td>INFO</td><td>Customize the title of the info container</td></tr><tr><td>warning</td><td><code>string</code></td><td>WARNING</td><td>Customize the title of the warning container</td></tr><tr><td>danger</td><td><code>string</code></td><td>DANGER</td><td>Customize the title of the danger container</td></tr><tr><td>details</td><td><code>string</code></td><td>DETAILS</td><td>Customize the title of the details container</td></tr><tr><td>notFound</td><td><code>string</code></td><td>Oops! Page does not exist.</td><td>404 page text</td></tr><tr><td>backToHome</td><td><code>string</code></td><td>Back To Home</td><td>404 page returns to the home page</td></tr><tr><td>inputPasswordText</td><td><code>string</code></td><td>Please enter the password</td><td>Password entry prompt</td></tr><tr><td>unlockSucessText</td><td><code>string</code></td><td>Success, enjoy it!</td><td>Prompt for successful password entry</td></tr><tr><td>unlockFailuerText</td><td><code>string</code></td><td>Failed, please enter again!</td><td>Password entry error prompt</td></tr></tbody></table><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token comment">// .vuepress/config.ts</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      tip<span class="token operator">:</span> <span class="token string">&#39;Tip&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      info<span class="token operator">:</span> <span class="token string">&#39;Info&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      tagsText<span class="token operator">:</span> <span class="token string">&#39;Tags&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      danger<span class="token operator">:</span> <span class="token string">&#39;Danger&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      warning<span class="token operator">:</span> <span class="token string">&#39;Warning&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      details<span class="token operator">:</span> <span class="token string">&#39;Details&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      backToHome<span class="token operator">:</span> <span class="token string">&#39;Back To Home&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      categoriesText<span class="token operator">:</span> <span class="token string">&#39;Categories&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      catalogTitle<span class="token operator">:</span> <span class="token string">&#39;On This Page&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      selectLanguageName<span class="token operator">:</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      editLinkText<span class="token operator">:</span> <span class="token string">&#39;Edit this page&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      lastUpdatedText<span class="token operator">:</span> <span class="token string">&#39;Last Updated&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      notFound<span class="token operator">:</span> <span class="token string">&#39;Oops! Page does not exist.&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      inputPasswordText<span class="token operator">:</span> <span class="token string">&#39;Please enter the password&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      unlockSucessText<span class="token operator">:</span> <span class="token string">&#39;Success, enjoy it!&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      unlockFailuerText<span class="token operator">:</span> <span class="token string">&#39;Failed, please enter again!&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4))])}const m=e(r,[["render",u]]),v=JSON.parse('{"path":"/en/docs/theme/multilingual.html","title":"I18n","lang":"en-US","frontmatter":{"title":"I18n","date":"2022-06-07T22:30:37.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"createdTime":1743533609000,"updatedTime":1743533609000,"contributors":[{"name":"Reco","username":"Reco","email":"recoluan@qq.com","commits":1,"url":"https://github.com/Reco"}]},"filePathRelative":"en/docs/theme/multilingual.md"}');export{m as comp,v as data};
