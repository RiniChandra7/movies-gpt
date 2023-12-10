// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0HiJRWIZNrjuZAy977Uce5NqwBygUkB4",
  authDomain: "moviegpt-89a33.firebaseapp.com",
  projectId: "moviegpt-89a33",
  storageBucket: "moviegpt-89a33.appspot.com",
  messagingSenderId: "870852754080",
  appId: "1:870852754080:web:731c78978aed334118a7c5",
  measurementId: "G-NTWPLJKP4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();