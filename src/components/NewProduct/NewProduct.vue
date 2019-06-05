<template>
  <div>
    <Banner :title="'众筹新品'"></Banner>
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
        {imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/30149/40/8970/20149/5ca2e84dE7641a4dc/342b926b8582a140.jpg?width=335&height=421'},
        {imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/19514/33/13824/16597/5ca2e84eE4b9cc39a/23b319b8846b585c.png?width=335&height=421'},
        {imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/12202/17/13916/19329/5ca2e84fE6bde713f/ff4f3231eb4c7312.jpg?width=335&height=421'}
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
