<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="Login">Login</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
export default {
  name: 'App',
  created() {
    // we may want to move this somewhere else, or use router guards
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push({ name: 'Dashboard' });
      } else {
        if (this.$store.getters.userId != '') {
          this.$router.push({ name: 'Login' });
          this.$store.commit('setUserId', '');
          this.$store.commit('setUserType', '');
        }
      }
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
