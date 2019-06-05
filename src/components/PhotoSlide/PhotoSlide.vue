<template>
  <div class="slide-fater" ref="wrapper">
      <ul ref="content">
        <li v-for="item in center" :key="item.imgUrl">
            <img :src="item.imgUrl">
        </li>
      </ul>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import { setTimeout } from 'timers';

export default {
  props: ['title','center'],
  data () {
    return {

    }
  },
  methods: {
    //动态计算ul的宽度
    computedWidth (count) {
      this.$refs.content.style.width = count * 125 + count * 16 + 16 + 'px' 
    }
  },
  mounted () {
    //创建 botter-scroll 
    console.log(this.$refs.wrapper)
    setTimeout(()=>{
      let bs = new BScroll(this.$refs.wrapper, {
      scrollX: true,
      click: true
    })
    },2000)

    //调用computedWidth()计算width
    this.computedWidth(this.center.length)
  }
}
</script>

<style lang="stylus" scoped>
  .slide-fater
    overflow hidden
    width 100%
    white-space: nowrap;
    li
      display inline-block
      padding-left .16rem
      img
        width 1.25rem
</style>
