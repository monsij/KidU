import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],

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

export default store;