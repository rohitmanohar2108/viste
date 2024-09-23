// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfh4BkplUT0UIw-pdSthRm-61fC4gIqe4",
  authDomain: "cognifyweb.firebaseapp.com",
  projectId: "cognifyweb",
  storageBucket: "cognifyweb.appspot.com",
  messagingSenderId: "166987032911",
  appId: "1:166987032911:web:70f039ffe4286f55b37d3a",
  measurementId: "G-10RSJNKEP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);