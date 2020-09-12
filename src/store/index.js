import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      uid: '',
      type: ''
    }
  },
  mutations: {
    setUserId(state, id) {
      state.user.uid = id;
    },
    setUserType(state, type) {
      state.user.type = type
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getUserId(state) {
      return state.user.uid;
    },
    getUserType(state) {
      return state.user.type;
    }
  }
})
