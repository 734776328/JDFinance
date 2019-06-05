<template>
  <div>
    <Banner :title="'赏金任务'"></Banner>
    <PhotoSlide :center="center"></PhotoSlide>
  </div>
</template>

<script>
import Banner from '../Banner/Banner.vue'
import PhotoSlide from '../PhotoSlide/PhotoSlide.vue'
export default {
  data () {
    return {
      center: [
        {imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t26893/316/1416172900/5740/58f20b1e/5bc82e3aN7aa90a89.png?width=210&height=260'},
        {imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t26767/72/1365822552/8516/2e071d95/5bc82e6eN0be93809.png?width=210&height=260'},
        {imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t27040/190/1395454031/8316/d3d74de2/5bc82eb2N34a7625d.png?width=210&height=260'},
        {imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t26182/297/1417522782/7864/19181a3b/5bc82ec0N0824153d.png?width=210&height=260'}
      ]
    }
  },
  components: {
    Banner,
    PhotoSlide,
  }
}
</script>

<style lang="stylus" scoped>

</style>
