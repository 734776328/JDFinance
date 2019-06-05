<template>
  <div>
    <Banner :title="'理财精选'"></Banner>
    <div class="centent">
      <ul>
        <li class="title">长乐盈<label style="display:none">180天可质</label></li>
        <li class="benefit">5.80%</li>
        <li class="centent">近1年历史年化投资回报率</li>
      </ul>
      <ul>
        <li class="title">京智0号</li>
        <li class="benefit">6.00%</li>
        <li class="centent">近1月历史年化投资回报率</li>
      </ul>
      <ul>
        <li class="title">建信养老飞益鑫</li>
        <li class="benefit">4.57%</li>
        <li class="centent">近7日年化收益</li>
      </ul>
      <ul>
        <li class="title">小白基金</li>
        <li class="benefit">4.50%</li>
        <li class="centent">7日年化收益率</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Banner from '../Banner/Banner.vue'
export default {
  components: {
    Banner
  }
}
</script>

<style lang="stylus" scoped>
  .centent
    overflow hidden
    ul
      float left
      width 50%
      font-size .15rem
      padding-left .16rem
      padding-bottom .16rem
      .title
        font-weight 550
        margin-top .17rem
        margin-bottom .08rem
      .benefit
        font-weight 700
        color red
        font-size .22rem
        margin-bottom .04rem
      .centent
        font-size .12rem
</style>
