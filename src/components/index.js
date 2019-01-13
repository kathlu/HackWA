
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyDAiwjEWkt3R7CanfPcuUuOdARbEmQiQiQ",
    authDomain: "space-needle-65693.firebaseapp.com",
    databaseURL: "https://space-needle-65693.firebaseio.com",
    projectId: "space-needle-65693",
    storageBucket: "space-needle-65693.appspot.com",
    messagingSenderId: "666094699188"
  };
console.log('hi')
firebase.initializeApp(config);

