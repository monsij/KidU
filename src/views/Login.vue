<template>
  <div class="home">
    <!--
    <b-navbar centered>
      <template slot="brand">
        <img src="../assets/brand.png" width="156" height="63" />
      </template>
    </b-navbar>
    -->
    <div class="login-main">
      <div class="login-inner">
        <div style="padding-bottom: 10px">
          <div class="brand-bg">
          <img src="../assets/brand_transp.png" width="400" height="63" />
          </div>
          <br>
          <b-icon class="far fa-clock"></b-icon>
          <span style="padding: 0 100px">Time for class!</span>
          <b-icon class="far fa-clock"></b-icon>
        </div>

        <b-button
          @click="login('student')"
          icon-left="google"
          size="is-large"
          type="is-info is-dark"
          class="login-button"
        >
          Student Login
        </b-button>
        <br />
        <b-button
          @click="login('teacher')"
          icon-left="google"
          size="is-large"
          type="is-info is-dark"
          class="login-button"
        >
          Teacher Login
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
        this.getProfileInfo();
        this.$fire({
          title: "Success",
          text: "Signed in using: ".concat(this.$store.getters.getEmailID),
          type: "success",
          timer: 3000
          }).then(()=>{
            //console.log(this.$store.getters.getDisplayName);
            //console.log(this.$store.getters.getDisplayName);
          });
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
    },
    getProfileInfo() {
      var user = firebase.auth().currentUser;
      var name, email;
      //var photoUrl, uid, emailVerified;

      if(user!=null) {
        name = user.displayName;
        //console.log(name);
        
        email = user.email;
        //console.log(email);

        //photoUrl = user.photoURL;
        //console.log(photoUrl);
        
        //emailVerified = user.emailVerified;
        //console.log(emailVerified);

        //uid = user.uid;
        //console.log(uid); 
        
        // Storing profile information for later use
        this.$store.commit('setDisplayName',name);
        this.$store.commit('setEmailID',email);

        
      }
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

.brand-bg {
  background:#000;
  max-width: 20vw;
  margin: 0 auto;
}

.login-button {
  border: 2px solid #4285F4;
  span {
    background: #4285F4;
  }


}
</style>
