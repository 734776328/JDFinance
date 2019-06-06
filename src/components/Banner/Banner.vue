<template>
  <div class="fater" v-if="!isshow">
    <h4>- {{title}} -</h4>
  </div>
  <div class="else-fater" v-else>
    <div class="title">
      <h4>{{title}}</h4>
    </div>
    <div class="centent">{{centent}}</div>
  </div>
</template>

<script>
export default {
  // props: ['title','isshow','centent']
  props: {
    title: {
      type: String,
      required: true
    },
    isshow: {
      type: Boolean,
      default: false
    },
    centent: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .fater
    height .55rem
    line-height .55rem
    overflow hidden
    text-align center
  .else-fater
    height .55rem
    line-height  .55rem
    overflow hidden
    padding 0 .12rem 
    .title
      float left
    .centent
      float right
      font-size .12rem
      font-weight 500
      color #999999
</style>
