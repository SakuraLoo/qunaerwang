<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link tag="li" :to="'/detail/' + item.id" class="recommend-item border-bottom" v-for="item in list" :key="item.id">
        <div class="recommend-item-wrapper">
          <img class="recommend-item-img" :src="item.imgUrl"/>
        </div>
        <div class="recommend-item-info">
          <p class="recommend-item-info-title"> {{ item.title }} </p>
          <p class="recommend-item-info-desc"> {{ item.desc }} </p>
          <button class="recommend-item-info-button">查看详情</button>
        </div>
      </router-link>
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
    margin-top: 5px
    line-height: 30px
    background-color: #eee
    text-indent: 15px
  &-item
    overflow: hidden
    display: flex
    height: 100px
    &-img
      width: 100px
      height: 100px
      padding: 5px
    &-info
      flex: 1
      padding: 12.5px 5px
      min-width: 0
      &-title
        line-height: 25px
        font-size: 16px
        ellipsis()
      &-desc
        line-height: 30px
        color: #ccc
        ellipsis()
      &-button
        margin-top: 3px
        padding: 0 10px
        border-radius: 3px
        background-color: #ff9300
        color: #fff
</style>