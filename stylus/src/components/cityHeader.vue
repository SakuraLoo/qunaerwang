<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <i class="iconfont icon-return header-back"></i>
    </router-link>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header 
  overflow hidden
  height $headerHeight
  line-height 42px
  text-align center
  color #fff
  background-color $bgColor
  font-size 16px
  &-back 
    float: left
    height: 100%
    line-height: 46px
    width 35px
    font-size 20px
    color #fff
</style>