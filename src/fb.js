import firebase from 'firebase/app';
import 'firebase/firestore'


// Initialize Firebase
var firebaseConfig = {

  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default db;