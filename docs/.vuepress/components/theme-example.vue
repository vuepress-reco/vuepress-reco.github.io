<template>
  <div class="theme-example">
    <div class="blog-list-wrapper">
      <div class="blog-item" v-for="(blog, index) in blogList" :key="index">
        <img class="thumbnail" :src="blog.thumbnail" alt="缩略图">
        <div class="info">
          <h3 class="title">{{ blog.name }}</h3>
          <p class="desc">{{ blog.desc }}</p>
          <a class="btn" target="blank" :href="blog.link">直达</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blogList: [
        { 
          name: '午后南杂', 
          desc: 'Enjoy when you can, and endure when you must.',
          link: 'https://www.recoluan.com', 
          thumbnail: '/blogImages/午后南杂.png' 
        },
        { 
          name: 'latte and cat', 
          desc: 'study programs and record life',
          link: 'http://blog.smallsunnyfox.com', 
          thumbnail: '/blogImages/latteandcat.png' 
        },
        { 
          name: '有梦想的咸鱼', 
          desc: '我不能克制我记几',
          link: 'https://blog.liudongyang.top/', 
          thumbnail: '/blogImages/有梦想的咸鱼.png' 
        },
        { 
          name: 'Vm Blog', 
          desc: '淡然Vm的个人博客',
          link: 'https://blog.danran.site/', 
          thumbnail: '/blogImages/vmblog.png' 
        },
        { 
          name: '404 NOT FOUND', 
          desc: '前端杂货铺',
          link: 'https://wang.icey.cc/', 
          thumbnail: '/blogImages/404notfound.png' 
        },
        { 
          name: 'X · M', 
          desc: 'Valar Morghulis ,Valar Dohaeris .',
          link: 'http://yvonnecheung.cn/', 
          thumbnail: '/blogImages/xm.png' 
        },
        { 
          name: '凝弧', 
          desc: '理解了目标，方向自然就出现了',
          link: 'https://callsoul.cn/', 
          thumbnail: '/blogImages/凝狐.png' 
        },
        { 
          name: 'Leecason', 
          desc: '若我所见不同，独守一角青空',
          link: 'https://leecason.github.io', 
          thumbnail: '/blogImages/Leecason.png' 
        },
        { 
          name: '平凡的你我', 
          desc: '理想成为大牛的小陈同学',
          link: 'https://reinness.com/', 
          thumbnail: '/blogImages/平凡的你我.png' 
        },
        { 
          name: 'SigureMo', 
          desc: '一个小透明的透明世界',
          link: 'https://www.sigure.xyz/', 
          thumbnail: '/blogImages/SigureMo.png' 
        },
        { 
          name: '月上秦少', 
          desc: '每一个不曾起舞的日子，都是对生命的辜负！',
          link: 'https://docs.zkkysqs.top/', 
          thumbnail: '/blogImages/月上秦少.png' 
        },
        { 
          name: 'originalxzx', 
          desc: 'Do your best, listen to your destiny.',
          link: 'http://www.originalxzx.top/', 
          thumbnail: '/blogImages/originalxzx.png' 
        },
        { 
          name: '山水有轻音', 
          desc: '开启旅行笔记',
          link: 'http://blod.wxinxianyun.com/', 
          thumbnail: '/blogImages/山水有轻音.png' 
        },
        { 
          name: 'Black House', 
          desc: '代码千万行, 注释第一行, 编码不规范, 同事两行泪.',
          link: 'https://dong4j.github.io/', 
          thumbnail: '/blogImages/BlackHouse.png' 
        },
        { 
          name: '学海无涯', 
          desc: '暂无',
          link: 'https://www.xuminhua.com/', 
          thumbnail: '/blogImages/学海无涯.png' 
        },
        { 
          name: 'znote', 
          desc: '荷尽已无擎雨盖，菊残犹有傲霜枝。',
          link: 'https://zpj80231.github.io/znote/', 
          thumbnail: '/blogImages/znote.png' 
        },
        { 
          name: '凯小默的博客', 
          desc: 'THE PHILOSOPHERS HAVE ONLY INTERPRETED THE WORLD IN VARIOUS WAYS;THE POINT HOWEVER IS TO CHANGE IT.',
          link: 'https://kaimo313.github.io/kxm_blog/', 
          thumbnail: '/blogImages/凯小默的博客.png' 
        },
        { 
          name: 'Coding and Fixing', 
          desc: '源于生活而高于生活',
          link: 'https://vxhly.gitee.io/blog/', 
          thumbnail: '/blogImages/CodingandFixing.png' 
        },
        { 
          name: '烟雨江畔', 
          desc: 'I’m ready for any challenge...',
          link: 'https://www.zengchulin.cn/', 
          thumbnail: '/blogImages/烟雨江畔.png' 
        },
        { 
          name: '会走路的三百块', 
          desc: '年轻人的博客',
          link: 'https://castleeee.github.io/', 
          thumbnail: '/blogImages/会走路的三百块.png' 
        },
      ]
    }
  }
}
</script>


<style lang="stylus" scoped>
.theme-example
  .blog-list-wrapper
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .blog-item
      margin-bottom 4rem
      width 48%
      box-shadow: var(--box-shadow)
      transition: all .5s
      .info
        margin 2.5rem  0 1.5rem
        padding 0 1.5rem
        .title
          margin 0
          max-width 65%
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        .desc
          margin .6rem 0 1.5rem  
        .btn
          display inline-block
          background-color $accentColor  
          color #ffffff
          border-radius 2px
          padding 4px 8px
          font-size .7rem
          text-decoration none 
          cursor pointer
      &:hover
        transform scale(1.05)

@media (max-width: $MQMobile)
  .theme-example
    .blog-list-wrapper
      .blog-item
        width 100%
</style>

