import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';
import { firestorePlugin } from 'vuefire';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueSimpleAlert from 'vue-simple-alert';


Vue.config.productionTip = false

Vue.use(Buefy);
Vue.use(firebase);
Vue.use(firestorePlugin);
Vue.use(VueSimpleAlert);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
