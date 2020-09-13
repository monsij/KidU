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
      type: '',
      displayName: '',
      emailID: ''
    }
  },
  mutations: {
    setUserId(state, id) {
      state.user.uid = id;
    },
    setUserType(state, type) {
      state.user.type = type
    },
    setDisplayName(state, displayName) {
      state.user.displayName = displayName
    },
    setEmailID(state, emailID) {
      state.user.emailID = emailID
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
    },
    getDisplayName(state) {
      return state.user.displayName;
    },
    getEmailID(state) {
      return state.user.emailID;
    }
  }
})

export default store;