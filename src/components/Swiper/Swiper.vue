<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/38925/1/7734/32802/5cef91cfE8962dc90/08a7df363c6465f2.png?width=750&height=400" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/38925/1/7734/32802/5cef91cfE8962dc90/08a7df363c6465f2.png?width=750&height=400" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/31588/6/14705/52443/5cbeb2b2Ea0648bba/e05f04db25d47126.png?width=750&height=400" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/38925/1/7734/32802/5cef91cfE8962dc90/08a7df363c6465f2.png?width=750&height=400" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/31588/6/14705/52443/5cbeb2b2Ea0648bba/e05f04db25d47126.png?width=750&height=400" alt="">
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// swiper导入
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'

export default {
  props: ['img'],
  mounted () {
    setTimeout(()=>{
      var myswiper = new Swiper('.swiper-container', {
        loop: true,
        //设置自动滑动 但是用户手动滑动后就不再自动滑动 若想不这样 设置 disableOnInteraction: false
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
        },
      })
    myswiper.init()
    },2220)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    img
      width 100%
</style>
