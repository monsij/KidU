import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
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
const fb = firebase.initializeApp(firebaseConfig);

export const firestore = fb.firestore();
export const database = fb.database();