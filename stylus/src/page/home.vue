<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import homeHeader from '../components/header'
import homeSwiper from '../components/swiper'
import homeIcons from '../components/icons'
import homeRecommend from '../components/recommend'
import homeWeekend from '../components/weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  components: {
    homeHeader,homeSwiper,homeIcons,homeRecommend,homeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ""
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    GetHomeAjax () {
      axios.get('/api/index.json?city=' + this.city).then(this.HomeAjaxSuccess);
    },
    HomeAjaxSuccess (res) {
      if(res.data.ret && res.data.data) {
        this.swiperList = res.data.data.swiperList;
        this.iconList = res.data.data.iconList;
        this.recommendList = res.data.data.recommendList;
        this.weekendList = res.data.data.weekendList;
      }
    }
  },
  mounted () {
    this.lastCity = this.city;
    this.GetHomeAjax();
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.GetHomeAjax();
    }
  }
}
</script>