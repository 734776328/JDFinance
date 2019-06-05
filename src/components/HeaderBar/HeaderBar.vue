<template>
  <div class="header-bar">
      <div class="come-back">
        <font class="icon iconfont">&#xe66b;</font>
      </div>
      <div class="more">
        <font class="icon iconfont">&#xe637;</font>
      </div>
      <div class="center">
        <font>京东金融</font>
      </div>
  </div>  
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header-bar
    overflow hidden
    height 0.45rem
    line-height 0.45rem
    border-bottom 1px solid #cccccc
    border-top 1px solid #cccccc
    .come-back
      height .45rem
      float left
      padding-left 0.12rem
    .more
      height .45rem
      float right
      padding-right 0.12rem
    .center
      text-align center
    .iconfont
      font-size 0.2rem
</style>
