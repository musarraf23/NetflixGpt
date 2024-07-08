// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ4Qyak6EmV9NK71nKzGx7XvrD5rTDZk4",
  authDomain: "netflixgpt-4add3.firebaseapp.com",
  projectId: "netflixgpt-4add3",
  storageBucket: "netflixgpt-4add3.appspot.com",
  messagingSenderId: "395096725693",
  appId: "1:395096725693:web:e88e33decb493efee5bfd4",
  measurementId: "G-7BR6138ES0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();