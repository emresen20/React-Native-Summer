// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'; //bunlar zorunluluk
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; // asyn storage packetini indirmemiz gerek
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVDET59Izt35cZicgpRFvB4AUOva_FdO4",
  authDomain: "reduxturkce.firebaseapp.com",
  projectId: "reduxturkce",
  storageBucket: "reduxturkce.appspot.com",
  messagingSenderId: "402439336640",
  appId: "1:402439336640:web:c8d035a98bb68eedd83325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  }); // bunu ekledik

export default app;