import Vue from 'vue'
import App from './App.vue'
import '@/styles/index.scss'
import store from './store'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
  store,
})
app.$mount()
