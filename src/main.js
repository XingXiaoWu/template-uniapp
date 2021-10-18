import Vue from 'vue'
// #ifdef H5
import Vant from 'vant'
import 'vant/lib/index.css'
// #endif
import App from './App.vue'
import '@/styles/index.scss'
import store from './store'
import axios from '@/api/index'

Vue.config.productionTip = false
Vue.prototype.$api = axios
// #ifdef H5
Vue.use(Vant)
// #endif
App.mpType = 'app'

const app = new Vue({
  ...App,
  store,
})
app.$mount()
