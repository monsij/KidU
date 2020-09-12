<template>
  <div class="home">
    <img alt="Main logo" src="../assets/brand.png">
    <br />
    <button @click="login('student')">Student Login</button>
    <br />
    <button @click="login('teacher')">Teacher Login</button>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Login',
  created() {
    // May need to move somewhere else, as this will persist and keep firing multiple times on login/logout
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('Dashboard');
      } else {
        this.$router.push('Login');
      }
    })
  },
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

