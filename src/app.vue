<template>
  <div>
    <div class="footer-bar">
      <HOME></HOME>
      <MAKEMONEY></MAKEMONEY>
      <BORROWMONEY></BORROWMONEY>
      <SAVEMONEY></SAVEMONEY>
      <VIP></VIP>
    </div>
  </div>
</template>

<script>
import HOME from './page/home/home.vue'
import MAKEMONEY from './page/makeMoney/makeMoney.vue'
import BORROWMONEY from './page/borrowMoney/borrowMoney.vue'
import SAVEMONEY from './page/saveMoney/saveMoney.vue'
import VIP from './page/vip/vip.vue'
export default {
  data () {
    return {
      name: 'zhang'
    }
  },
  components: {
    HOME,
    MAKEMONEY,
    BORROWMONEY,
    SAVEMONEY,
    VIP
  }
}
</script>

<style lang="stylus">
</style>
