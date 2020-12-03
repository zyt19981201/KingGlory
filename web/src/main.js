import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import axios from 'axios'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Card from './components/Card.vue'
import ListCard from './components/ListCard.vue'
import 'swiper/dist/css/swiper.css'
import './assets/iconfont/iconfont.css'
import './plugins/element.js'
// import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper, )
Vue.config.productionTip = false
Vue.component('m-card', Card)
Vue.component('m-list-card', ListCard)
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api',
  // baseURL: 'http://localhost:3000/web/api'
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')