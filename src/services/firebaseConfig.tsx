// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIy7XLegfeuMdP4HEkhBivkbv0SYMm1uM",
  authDomain: "mobile-9f05e.firebaseapp.com",
  projectId: "mobile-9f05e",
  storageBucket: "mobile-9f05e.appspot.com",
  messagingSenderId: "941951599746",
  appId: "1:941951599746:web:6b763abec77b2d2fb0e09b",
  measurementId: "G-0W91VD633R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);