// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'babel-polyfill'
import 'styles/reset.css'
import 'styles/border.css'
import './assets/iconfont/iconfont.css'
import fastClick from 'fastclick'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper)

fastClick.attach(document.body);
Vue.config.productionTip = false    

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})