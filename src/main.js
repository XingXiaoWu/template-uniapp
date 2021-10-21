import Vue from 'vue'
import uView from 'uview-ui'
import App from './App.vue'
import '@/styles/index.scss'
import store from './store'
import axios from '@/api/index'

Vue.config.productionTip = false
Vue.prototype.$api = axios
Vue.use(uView)

App.mpType = 'app'

const app = new Vue({
  ...App,
  store,
})
app.$mount()
