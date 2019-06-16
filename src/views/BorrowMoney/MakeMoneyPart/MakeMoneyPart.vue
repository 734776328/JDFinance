<template>
  <div class="MMPart">
    <ul>
      <li>
        <div>
          <p>2.9%</p>
          <p>近七日年华</p>
        </div>
        <div>
          <p>京东小金库</p>
          <p>当前收益最高产品</p>
        </div>
      </li>
      <li class="middle">
        <div>
          <p>4.15%</p>
          <p>每期派息收益</p>
        </div>
        <div>
          <p>银行精选30天</p>
          <p>+6.18奖励金</p>
        </div>
      </li>
      <li>
        <div>
          <p>20:00</p>
          <p>每晚</p>
        </div>
        <div>
          <p>狂欢摇面单</p>
          <p>618单单返奖金</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  .MMPart
    ul
      margin auto .1rem
      background #FFFFFF
      border-radius .1rem
      box-shadow 5px 4px 22px -4px #888
      margin-top -.2rem
      li
        overflow hidden
        margin-left .15rem
        >div
          width 40%
          border-right 1px solid #EFEFEF
          margin .1rem 0
        :nth-child(2)
          width 60%
        div
          float left
          height .63rem
          padding-top .1rem
        :nth-child(1)
          padding-left .1rem
          :nth-child(1)
            color #FF6B00
            font-weight 700
            font-size .25rem
          :nth-child(2)
            color #999999
            font-weight 400
            font-size .12rem
        :nth-child(2)
          padding-left .1rem
          :nth-child(2)
            color #999999
            font-weight 400
            font-size .12rem
            line-height .3rem
    .middle
      border-top 1px solid #EFEFEF
      border-bottom 1px solid #EFEFEF
</style>
