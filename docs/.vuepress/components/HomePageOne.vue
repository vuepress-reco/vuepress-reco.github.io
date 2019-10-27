<template>
  <article class="home-page-one-wrapper">
    <section class="description">
      <h1>vuePress-theme-reco</h1>
      <p class="description">A simple and beautiful vuepress Blog & Doc theme.</p>
      <img src="./images/blog.svg" alt="">
    </section>
    <section class="wish yesterday">
      <div class="wish-inner">
        <div class="img-wrapper">
          <img src="./images/yesterday.svg" alt="">
        </div>
        <div class="text-wrapper">
          <h1>Yesterday</h1>
          <p class="description">Develop a vuepress blog theme that looks happy and writes smoothly.</p>
        </div>
      </div>
    </section>
    <section class="wish today">
      <div class="wish-inner">
        <div class="text-wrapper">
          <h1>Today</h1>
          <p class="description">Help more people spend more time on content creation than on blogging.</p>
        </div>
        <div class="img-wrapper">
          <img src="./images/today.svg" alt="">
        </div>
      </div>
    </section>
    <section class="wish tomorrow">
      <div class="wish-inner">
        <div class="img-wrapper">
          <img src="./images/tomorrow.svg" alt="">
        </div>
        <div class="text-wrapper">
          <h1>Tomorrow</h1>
          <p class="description">I hope more fans can get involved and help this theme grow better.</p>
        </div>
      </div>
      
    </section>
  </article>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.home-page-one-wrapper
  padding-top 3.4rem
  section
    &.description
      box-sizing border-box
      margin 20px auto
      max-width 740px
      width 100%
      text-align center
      h1
        margin-top 70px
      p
        margin-bottom 60px  
      img
        display block
        width 100%
    &.wish
      &.yesterday, &.tomorrow
        background #f2f2f2
      .wish-inner
        box-sizing border-box
        margin 20px auto
        max-width 740px
        width 100%
        display flex
        padding 20px
        height 300px
        overflow hidden
        > div
          flex: auto
          &.img-wrapper
            max-width 360px
            img
              display block
              margin-top 50%
              transform translateY(-50%)
              width 100%
          &.text-wrapper
            box-sizing border-box
            padding 0 2rem
            h1
              margin-top 20%

@media (max-width: $MQMobile)
  .home-page-one-wrapper
    section
      padding 0 2rem

@media (max-width: $MQMobileNarrow)
  .home-page-one-wrapper
    section
      padding 0 2rem


.footer-wrapper footer
  border-top none!important
</style>