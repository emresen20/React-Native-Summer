// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBol8jRzFKWne9OBEWWehrGU1J-0yB3JOs",
  authDomain: "bookingapp-b060a.firebaseapp.com",
  projectId: "bookingapp-b060a",
  storageBucket: "bookingapp-b060a.appspot.com",
  messagingSenderId: "810946679442",
  appId: "1:810946679442:web:993c846530e0a939114c4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
const db = getFirestore();

export{auth,db};