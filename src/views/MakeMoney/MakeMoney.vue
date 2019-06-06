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
        <div class="boundary"></div>
      </div>
      <Classify></Classify>
      <div>
        <ImageBanner :imgUrl="'https://img12.360buyimg.com/jrpmobile/jfs/t1/72419/26/1131/55052/5cf6403cE530f769c/f423b08bafcbca4e.jpg?width=750&height=200'"></ImageBanner>
        <ImageBanner :imgUrl="'https://img12.360buyimg.com/jrpmobile/jfs/t1/57947/23/1701/101567/5cf74471E09088233/cfaa73e85ddc55aa.gif?width=750&height=220'"></ImageBanner>
        <ImageBanner class="last-img" :imgUrl="'https://img12.360buyimg.com/jrpmobile/jfs/t1/54430/7/1152/31787/5cee32fdE48ba90c6/de76eb0cda423436.jpg?width=750&height=200'"></ImageBanner>
      </div>
      <div class="boundary"></div>
      <div class="bounty-mission">
        <BountyMission></BountyMission>
        <ImageBanner :imgUrl="'https://img12.360buyimg.com/jrpmobile/jfs/t1/7640/35/4322/21318/5bda6023E656cbbbb/b2ddefd7ef80d7aa.png?width=750&height=200'"></ImageBanner>
        <ImageBanner :imgUrl="'https://img12.360buyimg.com/jrpmobile/jfs/t1/37697/16/1334/187953/5cb44c65E5dbefe83/200ce71a4347aeec.png?width=750&height=200'"></ImageBanner>
      </div>
      <div class="boundary"></div>
      <!-- 银行精选 -->
      <div>
        <BankSelected/>
      </div>
      <!-- 白条 -->
      <div>
        <WhiteBar/>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
  </div>  
</template>

<script>
import Classify from '../../components/Classify/Classify.vue'
import Swiper from '../../components/Swiper/Swiper.vue'
import ImageBanner from '../../components/ImageBanner/ImageBanner.vue'
import BountyMission from '../../components/BountyMission/BountyMission.vue'
import BankSelected from '../../components/BankSelected/BankSelected.vue'
import WhiteBar from './WhiteBar/WhiteBar.vue'
export default {
  components: {
    Swiper,
    Classify,
    ImageBanner,
    BountyMission,
    BankSelected,
    WhiteBar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .make-money-fater
    position relative
    background #FFFFFF
    .assets
      width 100%
      position relative
      background-color #FDFDFE
      .item
        margin 0 .12rem 0
        height .65rem
        position relative 
        top -.1rem
        z-index 999999999
        overflow hidden
        line-height .65rem
        color #CEB484
        background-color #FFFFFF 
        border-radius .05rem
        box-shadow .03rem .03rem .08rem rgba(101,118,155,0.15);
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
          font-size .14rem
  .last-img
    padding .2rem 0 .4rem
  .bounty-mission
    div
      padding-bottom .15rem
  .boundary
    width 100%
    height .1rem
    position relative
    margin-top -10px
    z-index 9
    background-color #EFF1F4
</style>

