import firebase from "firebase/app"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyDNqqobJwI9G-5KOn-ZRFvGtSUcCm7Q6Fg",
    authDomain: "jeswin-671ef.firebaseapp.com",
    projectId: "jeswin-671ef",
    storageBucket: "jeswin-671ef.appspot.com",
    messagingSenderId: "821944775529",
    appId: "1:821944775529:web:9ebf1568a9823d154583f8",
    measurementId: "G-6RZ2ZBS21S"
  };
  // Initialize Firebase
 
const firebaseApp =  firebase.initializeApp(firebaseConfig);
export const auth = firebaseApp.auth();
export default firebaseApp;
//   firebase.analytics();