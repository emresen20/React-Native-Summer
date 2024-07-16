// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
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

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);

export { auth, db };
