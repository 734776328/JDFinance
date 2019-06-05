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

<style lang="stylus" rel="stylesheet/stylus">
  .header-bar
    overflow hidden
    height 0.5rem
    line-height 0.5rem
    border-bottom 1px solid #cccccc
    .come-back
      float left 
      height 0.5rem
      padding-left 0.12rem
    .more
      float right
      height 0.5rem
      padding-right 0.12rem
    .center
      text-align center
    .iconfont
      font-size 0.2rem
</style>
