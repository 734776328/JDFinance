<template>
  <div class="white-bar">
    <div class="xiaobai">
      <slot></slot>
      <button>登录查看</button>
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
    padding .05rem .12rem .25rem
    background-color #ffffff
    overflow hidden
    .xiaobai
      float left 
      width 32%
      height 1.3rem
      box-shadow: 0 0 0.625rem 0.03125rem rgba(101,118,155,.15);
      text-align center
      line-height 1.3rem
      position relative
      button 
        border-radius .1rem
        background-color #D4B575
        color #FFF3E9
        width .7rem
        height .25rem
        font-size .10rem
        border 1px solid #D4B575
        position absolute
        top .9rem
        left .22rem
      span
        font-size .13rem
        color #C4A36C
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
