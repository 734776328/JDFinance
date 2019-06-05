<template>
  <div class="fater">
    <Classify></Classify>
    <Classify></Classify>
    <FinancingChoice></FinancingChoice>
    <Insurance></Insurance>
    <BountyMission></BountyMission>
    <NewProduct></NewProduct>
    <CopyRight></CopyRight>
  </div>
</template>

<script>
import Classify from '../../components/Classify/Classify.vue'
import FinancingChoice from '../../components/FinancingChoice/FinancingChoice.vue'
import Insurance from '../../components/Insurance/Insurance.vue'
import BountyMission from '../../components/BountyMission/BountyMission.vue'
import NewProduct from '../../components/NewProduct/NewProduct.vue'
import CopyRight from '../../components/CopyRight/CopyRight.vue'
export default {
  components: {
    Classify,
    FinancingChoice,
    Insurance,
    BountyMission,
    NewProduct,
    CopyRight
  }
}
</script>

<style lang="stylus" scoped>

</style>