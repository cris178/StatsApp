import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBTukNHh6ZiVsDMpgLccyYF5d5r4YCh8gI",
  authDomain: "steadfast-slate-266806.firebaseapp.com",
  databaseURL: "https://steadfast-slate-266806.firebaseio.com",
  projectId: "steadfast-slate-266806",
  storageBucket: "steadfast-slate-266806.appspot.com",
  messagingSenderId: "1010310677519",
  appId: "1:1010310677519:web:fc1ca745bdb58032d20f7a",
  measurementId: "G-J496S63RZ5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;