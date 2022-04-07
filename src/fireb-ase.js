import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvMU9Myb08ubTqCPnn0ivfH2jWKn0GY-A",
  authDomain: "clone-9c1f4.firebaseapp.com",
  projectId: "clone-9c1f4",
  storageBucket: "clone-9c1f4.appspot.com",
  messagingSenderId: "815665380276",
  appId: "1:815665380276:web:8d573a6aaf02303d8b50e1",
  measurementId: "G-RHV6EMQRY6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };