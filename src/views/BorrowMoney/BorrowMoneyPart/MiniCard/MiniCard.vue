<template>
  <div class="father" ref="father">
    <div class="card-list" ref="content">
      <div class="mini-card" :style="'background: url('+item.backgroundUrl+') no-repeat;background-size:cover;'" v-for="(item) in info" :key="item.urlImg">
        <p>{{item.describe}}</p>
        <p>{{item.maxMoney}}</p>
        <div>
          <span>{{item.decision}}</span>
        </div>
      </div>
      <div class="last-card">
        <img src="https://img10.360buyimg.com/mcmktadmin/jfs/t1/9377/10/13456/11453/5c46e707E1c7d260b/793417bab3371381.png?width=242&height=288">
      </div>
    </div>
  </div>
</template>

<script>

import BScroll from '@better-scroll/core'
import { setTimeout } from 'timers';

export default {
  props: ['info'],
  methods: {
    //动态计算ul的宽度
    computedWidth (length) {
      this.$refs.content.style.width = (length * 235 + length * 10 + 2*17 + 124)/100 + 'rem' 
    }
  },
  mounted () {
    //创建 botter-scroll 
    setTimeout(()=>{
      let bs = new BScroll(this.$refs.father, {
      scrollX: true,
      click: true
    })
    },2000)

    //调用computedWidth()计算width
    this.computedWidth(this.info.length)
  }
}
</script>

<style lang="stylus" scoped>
  .father
    overflow hidden
    padding 0 0 .2rem .17rem
    .card-list
      overflow hidden
      .mini-card
        float left
        padding .1rem
        background-size cover
        width 2.35rem
        height 1.44rem 
        border-radius .1rem
        margin-right .1rem
        :nth-child(1)
          font-weight: 700
          color #F6EFE4
          font-size .133rem
          padding .09rem 0
        :nth-child(2)
          color #ffffff
          font-size .27rem
          font-weight 600
        :nth-child(3)
          text-align center
          width 1rem
          height .3rem
          line-height .3rem
          border-radius .5rem
          background #FFFFFF
          margin .2rem 0
          span
            color #CC9D59
    .last-card
      width 1.21rem
      height 1.44rem
      float left
      border-radius .1rem
      margin-right .1rem
      img 
        height 1.44rem
</style>
