<template>
  <div>
    <router-link tag="div" to="/" class="header-abs">
      <i class="iconfont icon-return header-abs-back"></i>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont icon-return header-fixed-back"></div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.ScrollEvent)
  },
  deactivated () {
    window.removeEventListener('scroll', this.ScrollEvent)
  },
  methods: {
    ScrollEvent () {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity= top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header-abs 
  position: absolute
  left: .2rem
  top: .2rem
  width: .8rem
  height: .8rem
  line-height: .8rem
  border-radius: .4rem
  background-color: rgba(0,0,0,.8)
  text-align: center
  .header-abs-back 
    color: #ffffff
    font-size: .4rem

.header-fixed
  z-index: 2
  position: fixed
  top: 0
  left: 0
  right: 0
  height $headerHeight
  line-height $headerHeight
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