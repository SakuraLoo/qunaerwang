<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="list.length">
      <swiper-slide v-for="(item,index) in list" :key="index">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active
  background: #fff

.swiper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 30.47%
  background-color: #ccc

  &-img
    width: 100%
</style>
