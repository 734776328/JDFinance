<template>
  <div>
    <!-- 借钱 随借随还 -->
    <div class="borrow-money" style="background-color: #FFFFFF;">
      <!-- header -->
      <Title :titleInfo="titleInfo.BMoney"/>
      <!-- 迷你卡 mini-card -->
      <div  style="padding-bottom: .1rem;">
        <MiniCard :info="info" />
        <Title :titleInfo="titleInfo.MMoney" />
      </div>
    </div>
    <MakeMoneyPart/>
    <!-- 领取福利 get welfare part -->
    <div >
      <Banner :title="'领取福利'" :isshow="true" centent=""/>
      <GetWelfare/>
      <div style="margin: .1rem .15rem;">
        <ImageBanner :imgUrl="'https://img10.360buyimg.com/mcmktadmin/jfs/t1/35799/9/12081/27519/5d030428E4b47538b/021004dc4be17ea7.png?width=694&height=170'"/>
      </div>
    </div>
    <!-- 优惠大礼包 -->
    <div style="background-color: #FFFFFF;">
      <Banner :title="'优惠大礼包'" :isshow="true" centent=""/>
      <PhotoSlide :center="gift"/>
    </div>

    <!-- 等多优惠 -->
    <MoreDiscount/>
  </div>  
</template>

<script>
import Title from './components/Title/Title.vue'
import MiniCard from './BorrowMoneyPart/MiniCard/MiniCard.vue'
import MakeMoneyPart from './MakeMoneyPart/MakeMoneyPart.vue'
import Banner from '../../components/Banner/Banner.vue'
import GetWelfare from './GetWelfare/GetWelfare.vue'
import ImageBanner from '../../components/ImageBanner/ImageBanner.vue'
import PhotoSlide from '../../components/PhotoSlide/PhotoSlide.vue'
import MoreDiscount from './MoreDiscount/MoreDiscount.vue'

export default {
  data () {
    return {
      info: [
        {
          backgroundUrl: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/18920/23/6104/23010/5c46e5c8E0923120d/230cc521dd45872c.png?width=470&height=288',
          describe: '最高可借',
          maxMoney: '20,0000.00',
          decision: '立即激活'
        },
        {
          backgroundUrl: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/18901/27/9143/4028/5c7c8c91E838787ee/378fb1ae1f789871.png?width=470&height=288',
          describe: '最高可借',
          maxMoney: '300,000.00',
          decision: '立即借钱'
        },
        {
          backgroundUrl: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/20694/12/6073/4122/5c46e77aEf7a2e925/b7ae0665b75e0c35.png?width=470&height=288',
          describe: '最高可借',
          maxMoney: '50,000.00',
          decision: '立即激活'
        }
      ],
      titleInfo: {
        BMoney :
          {
            title: '借钱 随借随还',
            imgUrl: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/52580/27/2345/9179/5d0302f8E8ddc7043/a1d834fba3550f6c.png?width=278&height=78'
          }
        ,
        MMoney : 
          {
            title: '赚钱 超高利率',
            imgUrl: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/43868/2/6547/19195/5d030332E9d7f2734/187bf72614654077.png?width=278&height=78'
          }
      },
      gift: [
        {imgUrl: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/62009/40/1898/5280/5d030517E20eeaa5e/3097c647f6d9e247.png?width=220&height=225'},
        {imgUrl: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/74532/16/1659/6013/5cff6839E1fd6a10d/b94c6368e8bef162.png?width=220&height=225'},
        {imgUrl: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/71611/36/1839/3943/5d03055dE5997fc20/ee28903a89c82bc8.png?width=220&height=225'},
      ]
    }
  },
  components: {
    Title,
    MiniCard,
    MakeMoneyPart,
    Banner,
    GetWelfare,
    ImageBanner,
    PhotoSlide,
    MoreDiscount
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .borrow-money
    background: url(https://img10.360buyimg.com/mcmktadmin/jfs/t1/16269/31/4929/21780/5c372e80E25af9471/cf0a6c258ebcde26.png?width=750&height=1372) no-repeat 100% 90%
    background-size cover
</style>
