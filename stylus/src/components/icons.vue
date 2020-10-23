<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icons-icon" v-for="(item,index) in page" :key="index">
          <div class="icons-img"><img class="icons-img-img" :src="item.imgUrl"/></div>
          <p class="icons-info"> {{ item.desc }} </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props:  {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoPlay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = [];
      this.list.forEach((item,index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      })
      return pages;
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.icons >>> .swiper-container
  height: 0
  padding-bottom: 50%

.icons
  margin-top: 3px
  &-icon
    position: relative
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    background-color: #fff

  &-img
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 22px
    box-sizing: border-box
    padding: 5px
    &-img
      display: block
      margin: 0 auto
      height: 100%

  &-info
    position: absolute
    bottom: 0
    left: 0
    right: 0
    bottom: 0
    height: 22px
    line-height: 22px
    color: $darkTextColor
    text-align: center
</style>