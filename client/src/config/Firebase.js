import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyCA53bANht8iKUJglttxNeciKgRce6hGG4",
    authDomain: "hotelmanagementsystem-58ab4.firebaseapp.com",
    projectId: "hotelmanagementsystem-58ab4",
    storageBucket: "hotelmanagementsystem-58ab4.appspot.com",
    messagingSenderId: "789387117691",
    appId: "1:789387117691:web:c7ea150bd87fab8c028ede",
    measurementId: "G-TK65736VXB"
  };
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);