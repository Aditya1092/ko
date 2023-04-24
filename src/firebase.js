
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import 'firebase/storage';
 

 
 

// Initialize Firebase



// Initialize Cloud Firestore and get a reference to the service

const firebaseConfig = {
    apiKey: "AIzaSyCujMkEz8FxrL5Jh5xIKYYsbVjwRAPiNFo",
    authDomain: "naya-app-cbbb9.firebaseapp.com",
    projectId: "naya-app-cbbb9",
    storageBucket: "naya-app-cbbb9.appspot.com",
    messagingSenderId: "410197557508",
    appId: "1:410197557508:web:5b6de5eb044ecc91971051",
    measurementId: "G-5DNGXGSLRY"
  };
  export const fb = firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  
  
  
  
  