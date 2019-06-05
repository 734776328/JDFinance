<template>
  <div class="fater">
    <Classify></Classify>
    <Classify></Classify>
    <FinancingChoice></FinancingChoice>
    <Insurance></Insurance>
  </div>
</template>

<script>
import Classify from '../../../components/Classify/Classify.vue'
import FinancingChoice from '../../../components/FinancingChoice/FinancingChoice.vue'
import Insurance from '../../../components/Insurance/Insurance.vue'
export default {
  components: {
    Classify,
    FinancingChoice,
    Insurance
  }
}
</script>

<style lang="stylus" scoped>
  .fater
    height 100%
</style>