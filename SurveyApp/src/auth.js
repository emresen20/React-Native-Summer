import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase konfigürasyon bilgileri
const firebaseConfig = {
  apiKey: "AIzaSyAMibpMaDxYcP1zYd9VCHXD9vjcSDIq7CM",
  authDomain: "auth-survey.firebaseapp.com",
  projectId: "auth-survey",
  storageBucket: "auth-survey.appspot.com",
  messagingSenderId: "255311941506",
  appId: "1:255311941506:web:5cb9b3777b56fcb9f7c99b"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Firebase Authentication'ı başlat
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
