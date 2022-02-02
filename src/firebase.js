import firebase from "firebase";

const firebaseConfig = {

  // apiKey: "AIzaSyBZ0Ps6Zx69dM9cf56o-pCJ6QkVRk3pX_0",
  // authDomain: "clone-4e6ad.firebaseapp.com",
  // projectId: "clone-4e6ad",
  // storageBucket: "clone-4e6ad.appspot.com",
  // messagingSenderId: "659454610384",
  // appId: "1:659454610384:web:b72f551f8241a9b2e787d5"

  apiKey: "AIzaSyC9rdiUMvJeHEQSnHfvnGqLGjIUI4kDZIY",
    authDomain: "shopanytime-2d371.firebaseapp.com",
    projectId: "shopanytime-2d371",
    storageBucket: "shopanytime-2d371.appspot.com",
    messagingSenderId: "243813005302",
    appId: "1:243813005302:web:c2e6b82fedc34aaf03b9d7",
    measurementId: "G-BB8FYSL0VP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };