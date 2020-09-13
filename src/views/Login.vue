<template>
  <div class="home">
    <b-navbar centered>
      <template slot="brand">
        <img src="../assets/brand.png" width="156" height="63" />
      </template>
    </b-navbar>
    <div class="login-main">
      <div class="login-inner">
        <div style="padding-bottom: 40px">
          <b-icon class="far fa-clock"></b-icon>
          <span style="padding: 0 100px">Time for class!</span>
          <b-icon class="far fa-clock"></b-icon>
        </div>
        <b-button
          @click="login('student')"
          icon-left="google"
          size="is-large"
          type="is-info is-light"
          class="login-button"
        >
          Student Login (Google)
        </b-button>
        <br />
        <b-button
          @click="login('teacher')"
          icon-left="google"
          size="is-large"
          type="is-info is-light"
          class="login-button"
        >
          Teacher Login (Google)
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Login',
  methods: {
    login(type) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        console.log(token);
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        this.$store.commit('setUserId', user.uid);
        this.$store.commit('setUserType', type);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        console.log(email);
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(credential);
        // ...
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.login-main {
  background-image: url('../assets/login-main-bg.jpg');
  background-size: cover;
  background-position: 50%;
  height: 100vh;
  text-align: center;
  padding-top: 5em;
}

.login-inner {
  max-width: 60vw;
  margin: 0 auto;
  font-size: 60px;
  border: 2px solid black;
  background-image: url('../assets/login-inner-bg.png');
  font-family: 'Amaranth', sans-serif;
  padding: 90px 0;
}

.login-button {
  border: 2px solid #4285F4;
  span {
    background: #4285F4;
  }
}
</style>
