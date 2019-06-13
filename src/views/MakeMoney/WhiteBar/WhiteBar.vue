<template>
  <div class="white-bar-fater">
    <Banner :isshow="true" :title="'白条'" :centent="'年轻不留白 >'"/>
    <MenuBar :whiteItem="whiteItem">
      <span>小白信用分</span>
    </MenuBar>
  </div>
</template>

<script>
import Banner from '../../../components/Banner/Banner.vue'
import MenuBar from '../MenuBar/MenuBar.vue'
export default {
  data () {
    return {
      whiteItem: [
        [
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t8803/130/802395570/1891/103bedf1/59af980eN987fd5c2.png?width=56&height=56',
            centent: '白条'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t9373/154/878445473/2758/410dc92d/59b901f5Nc93edaac.png?width=56&height=56',
            centent: '还款'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t9391/169/1385525558/2762/2d29f1d5/59b90214N4f745107.png?width=56&height=56',
            centent: '1元抢券'
          },
        ],
        [
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t7246/167/3036813324/1578/d4ae001e/59b90228Nd61b6465.png?width=56&height=56',
            centent: '小白卡'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t8422/203/1374629409/2823/430e740d/59b90230N09140aba.png?width=56&height=56',
            centent: '金条'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56',
            centent: '校园'
          },
        ]
      ]
    }
  },
  components: {
    Banner,
    MenuBar
  }
}
</script>

<style lang="stylus" scoped>

</style>
