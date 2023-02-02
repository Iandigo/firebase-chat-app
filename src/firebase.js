import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDVvqw7uLZdE7XkGTJNpYUxkiwR02Io35Q",
  authDomain: "firechat-e7cae.firebaseapp.com",
  projectId: "firechat-e7cae",
  storageBucket: "firechat-e7cae.appspot.com",
  messagingSenderId: "1089060415154",
  appId: "1:1089060415154:web:e6f1e6812f59a0d4728bab",
  measurementId: "G-4DD40WLMN4",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
