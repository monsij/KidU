import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';
import { firestorePlugin } from 'vuefire'

Vue.config.productionTip = false


Vue.use(firebase)
Vue.use(firestorePlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
