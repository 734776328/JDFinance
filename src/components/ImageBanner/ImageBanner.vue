<template>
  <div class="image-banner-fater">
    <img :src="imgUrl">
  </div>
</template>

<script>
export default {
  props: ['imgUrl']
}
</script>

<style lang="stylus" scoped>
  .image-banner-fater
    margin 0
    img
      width 100%
      height 1rem
</style>
