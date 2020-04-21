import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDjUYjZhdCWJxyLXytrf_Ul3u7Qz0p1CgQ",
    authDomain: "hlgstats-67fd1.firebaseapp.com",
    databaseURL: "https://hlgstats-67fd1.firebaseio.com",
    projectId: "hlgstats-67fd1",
    storageBucket: "hlgstats-67fd1.appspot.com",
    messagingSenderId: "305623499640",
    appId: "1:305623499640:web:6dd5f9dd85edd184b07e8d",
    measurementId: "G-QZHPQKF5TZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;