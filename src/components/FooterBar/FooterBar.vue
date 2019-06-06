<template>
  <div>
        <div class="footer-bar">
          <ul>
            <router-link to="/main/home" tag="li">
              <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/8325/8/4331/3095/5bda5c89E1be47c14/47b6a296683a12a5.png?width=60&height=60" alt="">
              <p>首页</p>
            </router-link>
            <router-link to="/main/makemoney" tag="li">
              <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png?width=60&height=60" alt="">
              <p>赚钱</p>
            </router-link>
            <router-link to="/main/borrowmoney" tag="li">
              <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/5291/40/14133/594/5bda5ca3E92d0e800/09ac81fa5a5c96ef.png?width=60&height=60" alt="">
              <p>借钱</p>
            </router-link>
            <router-link to="/main/savemoney" tag="li">
              <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/3358/38/14064/816/5bda5cabEcb7eca8b/9bb064f1cda7ceba.png?width=60&height=60" alt="">
              <p>省钱</p>
            </router-link>
            <router-link to="/main/vip" tag="li">
              <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/7491/15/4277/926/5bda5cb9E421a0e60/89ee14ce9daf4aab.png?width=60&height=60" alt="">
              <p>金融会员</p>
            </router-link>
          </ul>
        </div>
        <div class="replace-holder">
        </div>
  </div>  
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .replace-holder
    width 100%
    height .5rem
  .footer-bar
    width 100%
    height .5rem
    text-align center
    position fixed
    background-color #ffffff
    bottom: 0
    left 0
    color #BDBFC5
    border-top 1px solid #EEEEEE
    box-shadow 0 -3px 4px rgba(0,0,0,.03);
    z-index 9999
    ul
      overflow hidden
      li
        float left
        width 20%
        padding-top 0.07rem
        img 
          height .22rem
          width .22rem
        p
          font-size 11px
</style>
