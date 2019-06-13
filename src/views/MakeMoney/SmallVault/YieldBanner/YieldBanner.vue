<template>
  <div class="image-banner">
    <div class="left">
      <div class="benifit">
         <span>{{benifit}}</span>
          <span>%</span>
      </div>
        <p>七日年化收益</p>
        <p>支付/缴费/优质理财/大额理财</p>
    </div>
    <div class="right">
      开启送礼包
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      benifit: '2.4110'
    }
  },
}
</script>

<style lang="stylus" scoped>
  .image-banner
    margin 0
    width 100%
    height 1rem
    background: url(../images/smallvault.png) 50% no-repeat
    background-size cover
    border-radius .05rem
    overflow hidden
    .left
      float left
      width 50%
      font-size .12rem
      padding-left .1rem
      .benifit
        margin .1rem 0
        :nth-child(1)
          font-size .28rem
          color #ffffff
          font-weight 600
        :nth-child(2)
          margin-left -4px
          font-weight 600
          font-size .08rem
      :nth-child(2)
        color #FDFFF7
      :nth-child(3)
        color #F1E2B6
        margin-top .1rem
    .right
      float right
      width 50%
      height 1rem
      background: url(../images/btn1.png) 50% no-repeat
      background-size cover
      text-align center
      line-height 1rem
      font-size .12rem
      color #FFFFFF
</style>
