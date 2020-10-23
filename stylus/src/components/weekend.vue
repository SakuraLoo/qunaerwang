<template>
  <div class="recommend">
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="recommend-item border-bottom" v-for="(item,index) in list" :key="index">
        <div class="recommend-item-wrapper">
          <img class="recommend-item-img" :src="item.imgUrl"/>
        </div>
        <div class="recommend-item-info">
          <p class="recommend-item-info-title"> {{ item.title }} </p>
          <p class="recommend-item-info-desc"> {{ item.desc }} </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend
  &-title
    line-height: 30px
    background-color: #eee
    text-indent: 15px
  &-item
    &-imgWrapper 
      overflow: hidden
      height: 0
      padding-bottom: 33.9%
    &-img
      width: 100%
    &-info
      padding: 5px
      &-title
        line-height: 20px
        font-size: 15px
        ellipsis()
      &-desc
        line-height: 20px
        color: #ccc
        ellipsis()
</style>