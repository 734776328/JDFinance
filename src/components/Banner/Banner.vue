<template>
  <div class="fater">
    <h4>- {{title}} -</h4>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="stylus" scoped>
  .fater
    height .55rem
    line-height .55rem
    overflow hidden
    text-align center
</style>
