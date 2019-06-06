<template>
  <div class="white-bar">
    <div class="xiaobai">

    </div>
    <div class="item">
      <ul v-for="(items,index) in whiteItem" :key="index">
        <li v-for="item in items" :key="item.imgUrl">
          <img :src="item.imgUrl">
          <p>{{item.centent}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    whiteItem: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .white-bar
    padding 0 .12rem
    background #FCFDFD
    .xiaobai
      float left 
      width 33%
      height 1.3rem
      box-shadow: 0 0 0.625rem 0.03125rem rgba(101,118,155,.15);
      padding-right 1%
    .item
      width 66%
      float right
      height 1.3rem
      box-shadow: 0 0 0.625rem 0.03125rem rgba(101,118,155,.15);
      ul
        overflow hidden
        li
          padding-top .11rem
          float left
          width 33%
          height .65rem
          font-size .12rem
          text-align center
          img
            width .28rem
</style>
