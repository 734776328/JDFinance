<template>
  <div class="get-welfare" >
    <!-- title -->
    <div class="title">
      <div class="left">{{titleInfo.title}}</div>
      <div class="right"><img :src="titleInfo.imgUrl"></div>
    </div>
  </div>
</template>

<script>
// https://u.jr.jd.com/growing/reMoney/images/welfareCard_bg_4e6d884f09.png
// https://u.jr.jd.com/growing/reMoney/images/btn-signin_36f65a9926.png
import Title from '../components/Title/Title.vue'
export default {
  data () {
    return {
      titleInfo: {
        title: '登录可以查看我的钢镚哦～',
        imgUrl: 'https://u.jr.jd.com/growing/reMoney/images/btn-signin_36f65a9926.png'
      }
    }
  },
  components: {
    Title
  }
}
</script>

<style lang="stylus" scoped>
  .get-welfare
    background url(https://u.jr.jd.com/growing/reMoney/images/welfareCard_bg_4e6d884f09.png) 100% no-repeat
    background-size cover
    height 2.5rem
    margin auto .15rem
    border-radius .12rem
    .title
      padding auto .1rem
      height .7rem
      overflow hidden
      line-height .7rem
      .left
        float left
        font-size .13rem
        color #ffffff
        padding-left .1rem
      .right
        float right
        margin-top .1rem
        img 
          width 1.3rem
</style>