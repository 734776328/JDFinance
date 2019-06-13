<template>
  <div class="insurance">
    <Banner :title="'保险保障'" :isshow=true :centent="''"/>
    <MenuBar :whiteItem="whiteItem"/>
    <ImageBanner :imgUrl="imgUrl"></ImageBanner>
    <div class="hot-sell">热销保险</div>
    <PhotoSlide :center="scollInfo"/>
  </div>
</template>

<script>
import Banner from '../../../components/Banner/Banner.vue'
import MenuBar from '../MenuBar/MenuBar.vue'
import ImageBanner from '../../../components/ImageBanner/ImageBanner.vue'
import PhotoSlide from '../../../components/PhotoSlide/PhotoSlide.vue'

export default {
  data () {
    return {
      whiteItem: [
        [
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t8881/304/1359242815/2540/5ef07179/59b90050N62f41061.png?width=56&height=56',
            centent: '车险'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t9040/57/2313007861/3024/82c36c44/59ca556eNb605e901.png?width=56&height=56',
            centent: '人寿'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56',
            centent: '意外'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t8929/33/1393593833/1749/1e115bd7/59b900e6N73c7b311.png?width=56&height=56',
            centent: '财产'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t8902/275/1411242449/2807/a2cc902a/59b90111N4e88098c.png?width=56&height=56',
            centent: '健康'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t8962/170/1384497943/2594/aa2a2ad9/59b9011bNf3b01bea.png?width=56&height=56',
            centent: '旅行'
          },
        ]
      ],
      imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/12124/17/11858/46303/5c92faf7E65f4674a/94bc59efd2d056e9.jpg?width=750&height=200',
      scollInfo: [
        {imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/24464/26/8171/23261/5c73b40dEddca0b4d/d23341c0ec8932e9.jpg?width=210&height=260'},
        {imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/19379/16/8191/19539/5c73b4aaEb1b3cb27/f2566275b974eae8.jpg?width=210&height=260'},
        {imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/22706/31/8158/20065/5c73b4d1Ecd7b7948/eb412d04d9e5a9c3.jpg?width=210&height=260'},
        {imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/19123/13/8083/20016/5c73b514E0bd4cac9/a2e2b5da65c36580.jpg?width=210&height=260'},
      ]
    }
  },
  components: {
    Banner,
    MenuBar,
    ImageBanner,
    PhotoSlide
  }
}
</script>
<style lang="stylus" scoped>
  .insurance
    .hot-sell
      height .5rem
      font-size .14rem
      line-height .5rem
      margin 0 .14rem
</style>
