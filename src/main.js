import Vue from 'vue'
import App from './App.vue'
import '@/styles/index.scss'
import store from './store'
import axios from '@/api/index'

Vue.config.productionTip = false
Vue.prototype.$api = axios
App.mpType = 'app'

const app = new Vue({
  ...App,
  store,
})
app.$mount()
