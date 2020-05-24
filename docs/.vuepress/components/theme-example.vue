<template>
  <div class="theme-example">
    <div class="blog-list-wrapper">
      <div class="blog-item" v-for="(blog, index) in currentPageData" :key="index">
        <img class="thumbnail" :src="blog.thumbnail" alt="缩略图">
        <div class="info">
          <h4 class="title">{{ blog.name }}</h4>
          <p class="desc">{{ blog.desc }}</p>
          <a class="btn" target="blank" :href="blog.link">直达</a>
        </div>
      </div>
    </div>

    <!-- 分页 -->
    <pagation
      class="pagation"
      :total="examplesData.length"
      :currentPage="currentPage"
      :perPage="9"
      @getCurrentPage="getCurrentPage"
    ></pagation>
  </div>
</template>

<script>
import examplesData from '../data/examplesData'

export default {
  data () {
    return {
      examplesData,
      currentPage: 1
    }
  },
  computed: {
    currentPageData () {
      const start = (this.currentPage - 1) * 9
      const end = this.currentPage * 9
      return this.examplesData.slice(start, end)
    }
  },
  methods: {
    getCurrentPage (currentPage) {
      this.currentPage = currentPage
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 100)
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
      width 31%
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
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          font-size 12px
        .btn
          display inline-block
          background-color $accentColor  
          color #ffffff
          border-radius 2px
          padding 2px 5px
          font-size 12px
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

