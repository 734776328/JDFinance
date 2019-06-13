<template>
  <div class="small-vault">
    <Banner :title="'小金库'" :isshow="true" :centent="'查看更多理财 >'"/>
    <div class="yield-banner">
      <YieldBanner/>
      <div class="jingxuan">稳健灵活 小白精选</div>
    </div>
  </div>
</template>

<script>
import YieldBanner from './YieldBanner/YieldBanner.vue'
import Banner from '../../../components/Banner/Banner.vue'
export default {
  components: {
    YieldBanner,
    Banner,
  }
}
</script>

<style lang="stylus" scoped>
  .yield-banner
    width 100%
    padding 0 .15rem
    .jingxuan
      height .5rem
      background-color #FFFFFF
      line-height .5rem
</style>

