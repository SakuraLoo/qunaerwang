<template>
  <div class="header">
    <div class="header_left">
      <i class="iconfont icon-return"></i>
    </div>
    <div class="header_input">
      <i class="iconfont icon-search"></i>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header_right">
        <!-- {{ this.doubleCity }} -->
        {{ this.city }}
        <i class="iconfont icon-down-block"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['city']),
    // ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header
  display: flex
  line-height: $headerHeight
  background: $bgColor
  color: #fff

  .header_left
    float: left
    height: 100%
    line-height: 46px
    width 35px
    font-size 20px
    color #fff
    text-align: center
    i
      font-size: .4rem
    
  .header_input
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .15rem
    margin-left: .2rem
    padding-left: .2rem
    background: #fff
    border-radius: .1rem
    color: #ccc
  
  .header_right
    min-width: 1.04rem
    padding: 0 .1rem
    float: right
    text-align: center
    color: #fff
    i
        margin-left: -.04rem
        font-size: .24rem
</style>