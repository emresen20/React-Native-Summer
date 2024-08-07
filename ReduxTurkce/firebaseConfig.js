// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

export default app;