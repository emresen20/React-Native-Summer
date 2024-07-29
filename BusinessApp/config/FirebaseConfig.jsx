// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ96l6pG8NBGt8kr-1lX-0g_23uiIEAxU",
  authDomain: "businessapp-345e3.firebaseapp.com",
  projectId: "businessapp-345e3",
  storageBucket: "businessapp-345e3.appspot.com",
  messagingSenderId: "534229688466",
  appId: "1:534229688466:web:72188996b292a9d144064b",
  measurementId: "G-W5RB1M09S1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);