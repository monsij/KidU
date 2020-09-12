<template>
  <div class="home">
    <img alt="Main logo" src="../assets/brand.png">
    <Login msg="Hi, enter your credentials to get started"/>
    <button @click="login">Login</button>
    <br />
    <button @click="register">Register</button>
    <br />
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

// @ is an alias to /src

export default {
  name: 'Login',
  components: {
  },
  data() {
    return {
      provider: new firebase.auth.GoogleAuthProvider()
    }
  },
  created() {
    // this.provider = new firebase.auth.GoogleAuthProvider();
  },
  methods: {
    login() {
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        console.log(token);
        // The signed-in user info.
        var user = result.user;
        console.log(user);
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

