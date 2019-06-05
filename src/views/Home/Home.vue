<template>
  <div class="mian">
    <!-- 头部 -->
    <HeaderBar></HeaderBar>

    <!-- 中心内容区 -->
    <router-view></router-view>

    <!-- 底部 -->
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import HeaderBar from '../../components/HeaderBar/HeaderBar.vue'
import FooterBar from '../../components/FooterBar/FooterBar.vue'
export default {
  
  data () {
    return {
      name: 'zhang'
    }
  },
  components: {
    HeaderBar,
    FooterBar,
  }
}
</script>

<style lang="stylus" scoped>
  .mian
    position relative
</style>
