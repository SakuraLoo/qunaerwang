<template>
  <div>
    <div class="banner" @click="BannerClick">
      <img class="banner-img" :src="bannerImg"/>
      <div class="banner-info">
        <div class="banner-info-title"> {{ this.sightName }} </div>
        <div class="banner-info-number">
          <i class="iconfont icon-img banner-info-number-icon"></i>
          {{ this.gallaryImgs.length }}
        </div>
      </div>
    </div>
    <fade-animate>
      <common-gallary
        :imgs="gallaryImgs"
        v-show="showGallary"
        @close="GalleryClose"
      ></common-gallary>
    </fade-animate>
  </div>
</template>

<script>
import commonGallary from '../common/gallary/gallary.vue'
import fadeAnimate from '../common/fadeAnimate/fadeAnimate.vue'

export default {
  components: {
    commonGallary,fadeAnimate
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    BannerClick () {
      this.showGallary = true;
    },
    GalleryClose () {
      this.showGallary = false;
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner 
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  &-img 
    width: 100%
  &-info 
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
    &-title 
      flex: 1
      font-size: .32rem
      padding: 0 .2rem
    &-number 
      margin-top: .1rem
      padding: 0 .4rem
      height: .4rem
      line-height: .4rem
      border-radius: .2rem
      background-color: rgba(0, 0, 0, .5)
      font-size: .24rem
      &-icon 
        font-size: .24rem
</style>