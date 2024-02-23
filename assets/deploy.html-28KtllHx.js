import{_ as t,r as i,o as c,c as o,b as n,d as s,e as l,a as e}from"./app-v4RMp1pm.js";const d={},p=e(`<blockquote><p>这里我们只介绍 GitLab 和 GitHub 的 pages 功能的部署。</p></blockquote><h2 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> GitHub</h2><p>打开项目设置的 <code>GitHub Pages</code> 模块，将 <code>Source</code> 设置为 <code>gh-pages</code>，这样我们就可以将博客项目放在 <code>master</code> 分支，而部署到 <code>gh-pages</code> 分支。</p><h3 id="手动部署" tabindex="-1"><a class="header-anchor" href="#手动部署" aria-hidden="true">#</a> 手动部署</h3><p>在根目录建一个 <code>deploy.sh</code> 文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo &#39;www.example.com&#39; &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span>

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),u=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"WARNING"),n("p",null,[s("如果你用的 MAC，在项目根目录借助 "),n("code",null,"终端"),s(" 执行 "),n("code",null,"bash deploy.sh"),s(" 即可；如果你使用的是 WINDOWS，在项目根目录借助 "),n("code",null,"Git Bash"),s(" 执行 "),n("code",null,"bash deploy.sh"),s(" 即可。")])],-1),r=n("h3",{id:"自动部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自动部署","aria-hidden":"true"},"#"),s(" 自动部署")],-1),m=n("p",null,[n("code",null,"GitHub"),s(" 的自动部署需要借助 "),n("code",null,"travis-ci"),s(" 。")],-1),v={href:"https://travis-ci.com/",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"GitHub",-1),k=e("<li>进入设置页面，点击 <code>Manage repositories on GitHub</code> 按钮，将需要自动部署的项目导入进来；</li><li>项目列表中，项目后面有一个 <code>settings</code> 按钮，点击进去将进行配置： <ol><li>获取 <code>token</code>：进入github的设置页面，点击 <code>Developer settings</code> 按钮，点击 <code>Personal access tokens</code> 按钮，在当前页面生成 <code>token</code>，名字随便写，只是起到区分作用；</li><li>配置 <code>token</code>：将上面生成的 <code>token</code> 添加在项目的设置页面的 <code>Environment Variables</code>，切记，名字不可随便写，在这里你写成 <code>GITHUB_TOKEN</code>；</li><li>配置 <code>Cron Jobs</code>：（如果你的项目就在 <code>master</code> 分支，可以不用配置这里）<code>Branch</code> 选择 你存放项目源码的分支，<code>Interval</code> 选择 <code>monthly</code>，<code>Options</code> 选择 <code>Always run</code>，添加成功后便会生效。</li></ol></li>",2),h=n("code",null,".travis.yml",-1),g={href:"https://docs.travis-ci.com/user/deployment/pages/",target:"_blank",rel:"noopener noreferrer"},_=e(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">language</span><span class="token punctuation">:</span> node_js
<span class="token key atrule">node_js</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> lts/*
<span class="token key atrule">script</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> npm run build
<span class="token key atrule">deploy</span><span class="token punctuation">:</span>
  <span class="token key atrule">provider</span><span class="token punctuation">:</span> pages
  <span class="token key atrule">skip-cleanup</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">local_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist <span class="token comment"># 项目打包后生成的文件的目录</span>
  <span class="token key atrule">github-token</span><span class="token punctuation">:</span> $GITHUB_TOKEN <span class="token comment"># 这里这个变量就是刚才配置 token 时填写的那个变量</span>
  <span class="token key atrule">keep-history</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">on</span><span class="token punctuation">:</span>
    <span class="token key atrule">branch</span><span class="token punctuation">:</span> master <span class="token comment"># 项目源码所在的分支</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),y=n("li",null,[s("现在去提交一下代码试试吧，在你提交成功后 "),n("code",null,"travis-ci"),s(" 的控制台就能看到你的项目在部署了。")],-1),f=e('<h2 id="gitlab" tabindex="-1"><a class="header-anchor" href="#gitlab" aria-hidden="true">#</a> GitLab</h2><h3 id="手动部署-1" tabindex="-1"><a class="header-anchor" href="#手动部署-1" aria-hidden="true">#</a> 手动部署</h3><ol><li><p>设置输出目录为 <code>public</code>：</p><p>由于 <code>GitLab</code> 的 <code>pages</code> 功能的指定文件夹是 <code>public</code>，所以我们要将项目的输出目录改为 <code>public</code>，也就是将 <code>config.js</code> 的 <code>dest</code> 设置为 <code>public</code>；</p></li><li><p>本地编译，然后将项目提交到 <code>GitLab</code> 即可。</p></li></ol><h3 id="自动部署-1" tabindex="-1"><a class="header-anchor" href="#自动部署-1" aria-hidden="true">#</a> 自动部署</h3>',4),x=n("li",null,[s("设置输出目录为 "),n("code",null,"public"),s("；")],-1),E=n("code",null,"GitLab",-1),G=n("code",null,".gitlab-ci.yml",-1),w={href:"https://docs.gitlab.com/ee/ci/yaml/README.html",target:"_blank",rel:"noopener noreferrer"},N=e(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>9.11.1

<span class="token key atrule">pages</span><span class="token punctuation">:</span>
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> node_modules/ <span class="token comment"># 缓存 node_modules，加速编译</span>

  <span class="token key atrule">script</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> npm install
  <span class="token punctuation">-</span> npm run docs<span class="token punctuation">:</span>build
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> public
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),A=n("li",null,[s("将项目提交到 "),n("code",null,"GitLab"),s(" 即可。")],-1);function M(R,B){const a=i("ExternalLinkIcon");return c(),o("div",null,[p,u,r,m,n("ol",null,[n("li",null,[s("打开 "),n("a",v,[s("travis-ci"),l(a)]),s("，使用 "),b,s(" 登录；")]),k,n("li",null,[s("在根目录下创建 "),h,s("（"),n("a",g,[s("配置规范"),l(a)]),s("）："),_]),y]),f,n("ol",null,[x,n("li",null,[s("由于 "),E,s(" 自带 CI，所以就省去了很多的配置步骤，只需要在项目根目录创建 "),G,s("（"),n("a",w,[s("配置规范"),l(a)]),s("）："),N]),A])])}const I=t(d,[["render",M],["__file","deploy.html.vue"]]);export{I as default};
