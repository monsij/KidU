
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
/* eslint-disable no-unused-vars */
import { firestore, database } from '@/database';

export default {
  name: 'App',
  created() {
    // we may want to move this somewhere else, or use router guards
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('setUserId', user.uid);
        console.log(this.$store.getters.getUserType);
        if (this.$store.getters.getUserType === 'teacher') {
          this.$router.push({ name: 'Teacher Dashboard' });
        } else {
          this.$router.push({ name: 'Student Dashboard'})
        }
      } else {
        if (this.$store.getters.userId != '') {
          this.$store.commit('setUserId', '');
          this.$store.commit('setUserType', '');
          this.$router.push({ name: 'Login' });
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
