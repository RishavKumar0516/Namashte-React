// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu7j2UxNlKK_s7IUcY9d8TI3KvodzZTss",
  authDomain: "netflixgpt-8f587.firebaseapp.com",
  projectId: "netflixgpt-8f587",
  storageBucket: "netflixgpt-8f587.firebasestorage.app",
  messagingSenderId: "825250785717",
  appId: "1:825250785717:web:1c75fe3e031c32dbf351fc",
  measurementId: "G-B0H0F76TC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();