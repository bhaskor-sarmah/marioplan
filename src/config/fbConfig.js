import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDrEwVxFA3ltzXBMcehkwtXNKm08iPMv5Y",
  authDomain: "react-firebase-marioplan-f27bf.firebaseapp.com",
  databaseURL: "https://react-firebase-marioplan-f27bf.firebaseio.com",
  projectId: "react-firebase-marioplan-f27bf",
  storageBucket: "react-firebase-marioplan-f27bf.appspot.com",
  messagingSenderId: "64289109638",
  appId: "1:64289109638:web:7a4f4d132a59237f35c307",
  measurementId: "G-ZP2B52JKD9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
// firebase.analytics();

export default firebase;
