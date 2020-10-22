import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB9_omPcTAEK7B2E22-LVk9rNUpCUizSGw",
  authDomain: "clone-4352b.firebaseapp.com",
  databaseURL: "https://clone-4352b.firebaseio.com",
  projectId: "clone-4352b",
  storageBucket: "clone-4352b.appspot.com",
  messagingSenderId: "884747409352",
  appId: "1:884747409352:web:b0fed45651f5c97e8352fd",
  measurementId: "G-VB1M7HZC3C",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
