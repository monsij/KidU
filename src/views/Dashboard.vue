<template>
  <div>
    <p>
      {{ this.$store.getters.getUserId }}
      You are {{ this.$store.getters.getUserType }}
    </p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Dashboard',
  methods: {
    logout() {
      firebase.auth().signOut();
    }
  }
}
</script>