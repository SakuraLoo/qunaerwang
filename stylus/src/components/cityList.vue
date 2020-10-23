<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button"> {{ this.currrentCity }} </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button" v-for="item in hot" :key="item.id" @click="CityClick(item.name)"> {{ item.name }} </div>
        </div>
      </div>
      <div class="area" v-for="(city,key) in cities" :key="key" :ref="key">
        <div class="title" :id="key"> {{ key }} </div>
        <div class="item-list">
          <div class="item border-topbottom" v-for="item in city" :key="item.id" @click="CityClick(item.name)"> {{ item.name }} </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BetterScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper);
  },
  computed: {
    ...mapState({
      currrentCity: 'city'
    })
  },
  methods: {
    CityClick (city) {
      this.changeCity(city);
      this.$router.push('/');
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if(this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
        console.log(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.list 
  overflow hidden
  position absolute
  top 82px
  left 0
  right 0
  bottom 0
  .title
    line-height .54rem
    background-color #eee
    padding-left .2rem
    color #666
    font-size .26rem
  .button-list
    overflow hidden
    padding .1rem
    .button 
      float left
      margin .1rem
      padding .1rem
      width calc(33.33% - .44rem)
      text-align center
      border .02rem solid #ccc
      border-radius .06rem
  .item-list
    .item
      line-height .76rem
      padding-left .2rem
</style>