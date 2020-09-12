<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>This is a test message</h2>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCF_kA1kxLTj2qm4JsheXyeZ4FTa5Yx66Q",
    authDomain: "kidu-c74a6.firebaseapp.com",
    databaseURL: "https://kidu-c74a6.firebaseio.com",
    projectId: "kidu-c74a6",
    storageBucket: "kidu-c74a6.appspot.com",
    messagingSenderId: "850545730335",
    appId: "1:850545730335:web:4602e3def565e69ecb862a",
    measurementId: "G-43DV8NDKV2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  import firebase from 'firebase';


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
};
</script>
