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
          thumbnail: '/blogImages/0.png' 
        },
        { 
          name: '刘晓北', 
          desc: '一个前端狗记录的一点小事情',
          link: 'https://tankryze.github.io/', 
          thumbnail: '/blogImages/1.png' 
        },
        { 
          name: 'latte and cat', 
          desc: 'study programs and record life',
          link: 'http://blog.smallsunnyfox.com', 
          thumbnail: '/blogImages/2.png' 
        },
        { 
          name: '会走路的三百块', 
          desc: '年轻人的博客',
          link: 'https://castleeee.github.io/', 
          thumbnail: '/blogImages/3.png' 
        },
        { 
          name: 'originalxzx', 
          desc: 'Do your best, listen to your destiny.',
          link: 'http://www.originalxzx.top/', 
          thumbnail: '/blogImages/4.png' 
        },
        { 
          name: 'Sumind\'s Blog', 
          desc: '做一个有灵魂的前端工程师',
          link: 'https://sumind.cn/', 
          thumbnail: '/blogImages/5.png' 
        },
        { 
          name: 'ZacToy', 
          desc: 'Welcome',
          link: 'https://zactony.github.io', 
          thumbnail: '/blogImages/6.png' 
        },
        { 
          name: 'Bajins', 
          desc: '个人笔记',
          link: 'https://woytu.github.io/', 
          thumbnail: '/blogImages/7.png' 
        },
        { 
          name: 'Black House', 
          desc: '代码千万行, 注释第一行, 编码不规范, 同事两行泪.',
          link: 'https://dong4j.github.io/', 
          thumbnail: '/blogImages/8.png' 
        },
        { 
          name: 'goozyshi的博客', 
          desc: 'Easy Come, Easy Go',
          link: 'https://goozyshi.github.io/', 
          thumbnail: '/blogImages/9.png' 
        },
        { 
          name: '其乐的博客', 
          desc: '我的心路历程',
          link: 'http://theshy98.top/', 
          thumbnail: '/blogImages/10.png' 
        },
        { 
          name: '学海无涯', 
          desc: '暂无',
          link: 'https://www.xuminhua.com/', 
          thumbnail: '/blogImages/11.png' 
        },
        { 
          name: 'znote', 
          desc: '荷尽已无擎雨盖，菊残犹有傲霜枝。',
          link: 'https://zpj80231.github.io/znote/', 
          thumbnail: '/blogImages/12.png' 
        },
        { 
          name: '凯小默的博客', 
          desc: 'THE PHILOSOPHERS HAVE ONLY INTERPRETED THE WORLD IN VARIOUS WAYS;THE POINT HOWEVER IS TO CHANGE IT.',
          link: 'https://kaimo313.github.io/kxm_blog/', 
          thumbnail: '/blogImages/13.png' 
        },
        { 
          name: 'Coding and Fixing', 
          desc: '源于生活而高于生活',
          link: 'https://vxhly.gitee.io/blog/', 
          thumbnail: '/blogImages/14.png' 
        }
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
      box-shadow: 0 2px 10px rgba(0,0,0,0.2)
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

