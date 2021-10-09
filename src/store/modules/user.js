const state = {
  id: '123',
  name: '',
}

const mutations = {
  setId(state, payload) {
    state.id = payload
  },
}

const actions = {
  setId({ commit }, payload) {
    commit('setId', payload)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  // 需要持久化的key，请填写string字符串
  persistence: ['name'],
}
