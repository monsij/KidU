import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: ''
  },
  mutations: {
    setUserId(state, id) {
      state.userId = id;
    }
  },
  actions: {
  },
  modules: {
  }
})
