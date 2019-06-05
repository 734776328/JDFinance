<template>
  <div class="make-money-fater">
      <Swiper></Swiper>
      <div class="assets">
        <div class="item">
          <div class="vip-class">
            会员等级
          </div>
          <div class="sign-in">
            <span>签到</span>
          </div>
          <div class="login">
            <span>立马登录 马上赚钱!</span>
          </div>
        </div>
        <!-- 分界线 -->
        <div class="boundary"></div>
      </div>
  </div>  
</template>

<script>
import Swiper from '../../components/Swiper/Swiper.vue'
export default {
  components: {
    Swiper
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .make-money-fater
    .assets
      width 100%
      height .65rem
      position relative
      .item
        margin 0 .12rem 0
        height .65rem
        position relative 
        top -.1rem
        z-index 3
        overflow hidden
        box-shadow 0 0 0.625rem 0.03125rem rgba(101,118,155,.15)
        line-height .65rem
        color #CEB484
        .vip-class
          color #ffffff
          font-size .10rem
          width .46rem
          height .33rem
          background-color #D5B67D
          float left 
          margin 16px 10px
          line-height .33rem
          border-radius .05rem
          text-align center
        .sign-in
          color #ffffff
          font-size .10rem
          width .46rem
          height .33rem
          background-color #D5B67D
          float right 
          margin 16px 10px
          line-height .33rem
          border-radius .05rem
          text-align center
        .login
          margin-left .1rem
      .boundary
        width 100%
        height .1rem
        position fixed
        background-color #EFF1F4
        bottom: 0
        left 0
</style>

