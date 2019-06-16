<template>
  <div class="title">
    <div class="left"><h3>{{titleInfo.title}}</h3></div>
    <div class="right"><img :src="titleInfo.imgUrl"></div>
  </div>
</template>

<script>
export default {
  props: ['titleInfo']
}
</script>

<style lang="stylus" scoped>
  .title
    padding .1rem .1rem .1rem .17rem
    text-align center
    line-height .39rem
    overflow hidden
    color #FFFFFF
    .left
      float left 
    .right
      float right
      img
        width 1.39rem
</style>
