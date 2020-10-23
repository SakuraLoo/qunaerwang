<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="WatchABCChange"></city-alphabet>
  </div>
</template>

<script>
import cityHeader from '../components/cityHeader'
import citySearch from '../components/citySearch'
import cityList from '../components/cityList'
import cityAlphabet from '../components/cityAlphabet'
import axios from 'axios';

export default {
  components: {
    cityHeader,citySearch,cityList,cityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    }
  },
  methods: {
    GetCityAjax () {
      axios.get('/api/city.json').then(this.CityAjaxSuccess);
    },
    CityAjaxSuccess (res) {
      this.cities = res.data.data.cities;
      this.hotCities = res.data.data.hotCities;
    },

    WatchABCChange (abc) {
      this.letter = abc;
    }
  },
  mounted () {
    this.GetCityAjax();
  }
}
</script>