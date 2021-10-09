import Vue from 'vue'
import Vuex from 'vuex'
// #ifdef H5
import createPersistedState from 'vuex-persistedstate'
// #endif

import getters from './getters'

Vue.use(Vuex)

const modules = {}
const modulePluginPaths = []
const requireModule = require.context('./modules', false, /.js$/)
requireModule.keys().forEach((fileName) => {
  modules[fileName.slice(2, -3)] = requireModule(fileName).default
  // 如果存在且大于0
  // #ifdef H5
  if (requireModule(fileName).default.persistence?.length > 0) {
    requireModule(fileName).default.persistence.forEach((item) => {
      modulePluginPaths.push(`${fileName.slice(2, -3)}.${item}`)
    })
  }
  // #endif
})
const store = new Vuex.Store({
  modules,
  getters,
  strict: process.env.NODE_ENV !== 'production',
  plugins: [
    // #ifdef H5
    createPersistedState({
      paths: modulePluginPaths,
      // 默认为localstorage
      storage: window.sessionStorage,
    }),
    // #endif
  ],
})

export default store
