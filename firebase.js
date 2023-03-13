// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaSLOefj5WzkBdQy0MyI_sGTgTrClnkbc",
  authDomain: "portfolio-ac8a9.firebaseapp.com",
  projectId: "portfolio-ac8a9",
  storageBucket: "portfolio-ac8a9.appspot.com",
  messagingSenderId: "1027668567651",
  appId: "1:1027668567651:web:bb3965b8531c2369253a56",
  measurementId: "G-27T0FCL2DK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
