<template>
<div class="contributors-wrapper">
  <div v-for="(item, index) in contributors" :key="index">
    <h3 class="contributors-title">
      {{ item.title }}
      <GitHubLink :repo="`vuepress-reco/${item.title}`"/>
    </h3>
    <ul class="contributors-list">
      <li class="contributors-item" v-for="(contributor, subIndex) in item.list" :key="subIndex">
        <a :href="contributor.html_url">
          <img class="avatar" :src="contributor.avatar_url" :alt="contributor.login"><br/>
          <a class="name">{{ contributor.login }}</a>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import recoFetch from 'reco-fetch'
export default {
  data () {
    return {
      contributors: []
    }
  },
  created () {
    this.getContributors()
  },
  methods: {
    getContributors () {
      const titleArr = ['vuepress-theme-reco', 'vuepress-reco.github.io']
      const p1 = recoFetch('https://api.github.com/repos/vuepress-reco/vuepress-theme-reco/contributors')
      const p2 = recoFetch('https://api.github.com/repos/vuepress-reco/vuepress-reco.github.io/contributors')

      Promise.all([p1, p2]).then(values => { 
        const newValues = values.map((item, index) => ({
          title: titleArr[index],
          list: item
        }))

        this.contributors = newValues
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.contributors-wrapper
  box-sizing border-box
  margin 0 auto
  max-width 46rem
  width 100%
  text-align cent
  > div:last-child
    .contributors-list
      margin 30px 0 0
  .contributors-title
    margin-top 20px
  .contributors-list
    list-style none
    display flex
    flex-wrap wrap
    padding-left 0
    width 100%
    margin 30px 0 60px
    .contributors-item
      flex 0 0 20%
      margin-bottom 10px
      text-align center
      .avatar
        display inline-block
        width 60px
        height 60px
        border-radius 50%
      .name
        margin 0 auto
        width 90%
        display block
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;  
</style>