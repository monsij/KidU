<template>
  <b-navbar>
    <template slot="brand">
      <img src="../assets/brand.png" width="156" height="63" />
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ name: 'Teacher Dashboard' }">
        Dashboard
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'Calendar' }">
        Calendar
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <b-button type="is-primary is-light" @click="logout">Log Out</b-button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Navbar',
  methods: {
    logout() {
      firebase.auth().signOut();
    }
  }
}
</script>