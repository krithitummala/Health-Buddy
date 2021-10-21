import firebase from 'firebase'
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyCsjkj2dKRwBMpdSRNL3LJJJIVJLkQ5ta8",
    authDomain: "health-buddy-93f97.firebaseapp.com",
    projectId: "health-buddy-93f97",
    storageBucket: "health-buddy-93f97.appspot.com",
    messagingSenderId: "968253332002",
    appId: "1:968253332002:web:94c4bf849477a42c58087b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();