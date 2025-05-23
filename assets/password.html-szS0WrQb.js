import{_ as a,c as t,b as s,e as i,r as p,o as l}from"./app-DXyB3U1V.js";const c={};function o(r,n){const e=p("md5");return l(),t("div",null,[n[0]||(n[0]=s('<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>If the website as a whole or a document is private and does not want to be made public, you can only enter the content page after filling in the key login (login is invalid after closing the browser tab).</p><ul><li>the number of passwords can only be 6 characters.</li><li>multiple passwords can be set through an array.</li></ul></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><ol><li>The security of encryption is low, please use it as appropriate.</li><li>If encryption is set, the anchor function will fail.</li></ol></div><h2 id="obtaining-ciphertext" tabindex="-1"><a class="header-anchor" href="#obtaining-ciphertext"><span>Obtaining Ciphertext</span></a></h2><p>If your password is <code>123456</code>, you need to convert it into ciphertext, that is, <code>14e1b600b1fd579f47433b88e8d85291</code>, use ciphertext to set the password.</p><p>After the website is released, enter <code>123456</code> in the password input box to enter the website, and others cannot know your password through the ciphertext in the code, but you must remember your password in plaintext.</p><p>Please enter the password plaintext in the input box below to get the corresponding ciphertext:</p>',6)),i(e),n[1]||(n[1]=s(`<h2 id="set-encryption" tabindex="-1"><a class="header-anchor" href="#set-encryption"><span>Set Encryption</span></a></h2><h3 id="encrypt-the-e-entire-website" tabindex="-1"><a class="header-anchor" href="#encrypt-the-e-entire-website"><span>Encrypt The e=Entire Website</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token comment">// .vuepress/config.ts</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// set a single password</span></span>
<span class="line">    password<span class="token operator">:</span> <span class="token string">&#39;14e1b600b1fd579f47433b88e8d85291&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// set multiple passwords</span></span>
<span class="line">    password<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">&#39;14e1b600b1fd579f47433b88e8d85291&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&#39;f8de1968939dd4ac5992ce962993ac2b&#39;</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="encrypting-a-single-page" tabindex="-1"><a class="header-anchor" href="#encrypting-a-single-page"><span>Encrypting A Single Page</span></a></h3><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> xxx</span>
<span class="line"><span class="token comment"># set a single password</span></span>
<span class="line"><span class="token key atrule">password</span><span class="token punctuation">:</span> 14e1b600b1fd579f47433b88e8d85291</span>
<span class="line"><span class="token comment"># set multiple passwords</span></span>
<span class="line"><span class="token key atrule">password</span><span class="token punctuation">:</span> </span>
<span class="line"> <span class="token punctuation">-</span> 14e1b600b1fd579f47433b88e8d85291</span>
<span class="line"> <span class="token punctuation">-</span> f8de1968939dd4ac5992ce962993ac2b</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5))])}const u=a(c,[["render",o]]),h=JSON.parse('{"path":"/en/docs/theme/password.html","title":"Encryption","lang":"en-US","frontmatter":{"title":"Encryption","date":"2022-07-01T00:35:26.000Z"},"headers":[{"level":2,"title":"Obtaining Ciphertext","slug":"obtaining-ciphertext","link":"#obtaining-ciphertext","children":[]},{"level":2,"title":"Set Encryption","slug":"set-encryption","link":"#set-encryption","children":[{"level":3,"title":"Encrypt The e=Entire Website","slug":"encrypt-the-e-entire-website","link":"#encrypt-the-e-entire-website","children":[]},{"level":3,"title":"Encrypting A Single Page","slug":"encrypting-a-single-page","link":"#encrypting-a-single-page","children":[]}]}],"git":{"createdTime":1747990935000,"updatedTime":1747990935000,"contributors":[{"name":"三人","username":"","email":"stwangcq@163.com","commits":1}]},"filePathRelative":"en/docs/theme/password.md"}');export{u as comp,h as data};
