<template>
  <div>
    <Banner :title="'银行精选'" :isshow="true" :centent="'等多银行服务 >'"></Banner>
    <PhotoSlide :center="center"></PhotoSlide>
  </div>
</template>

<script>
import Banner from '../Banner/Banner.vue'
import PhotoSlide from '../../components/PhotoSlide/PhotoSlide.vue'
export default {
  data () {
    return {
      center: [
        {imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t11146/24/2920754736/6944/5845636d/5cdd0a6eN9927ae25.png?width=210&height=260'},
        {imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t11293/128/3052512266/21236/ff9211a7/5cde1a7bNec04b900.png?width=210&height=260'},
        {imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/78161/22/1122/6862/5cf64f57E22d73ec6/6db7f006167ae90c.png?width=210&height=260'},
        {imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/52696/34/1660/7438/5cf64f6aE85f1676e/bded5460995cc76e.png?width=210&height=260'},
        {imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t26410/345/1052784155/8412/66e542af/5bc04992N0d13e713.jpg?width=210&height=260'},
      ]
    }
  },
  components: {
    Banner,
    PhotoSlide
  }
}
</script>

<style lang="stylus" scoped>

</style>
