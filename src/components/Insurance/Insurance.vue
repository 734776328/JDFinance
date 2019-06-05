<template>
  <div>
    <Banner :title="'保险保障'"></Banner>
    <PhotoSlide :title="'爆款防癌险'" :desc="'70岁三高都能保'"></PhotoSlide>
  </div>
</template>

<script>
import Banner from '../Banner/Banner.vue'
import PhotoSlide from '../PhotoSlide/PhotoSlide.vue'
export default {
  components: {
    Banner,
    PhotoSlide,
  }
}
</script>

<style lang="stylus" scoped>

</style>
