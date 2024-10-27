import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_mbml6PENrjwdoJNg1GUQUaNmnADAVWs",
  authDomain: "weather-dashboard-b13c8.firebaseapp.com",
  projectId: "weather-dashboard-b13c8",
  storageBucket: "weather-dashboard-b13c8.appspot.com",
  messagingSenderId: "1065673627817",
  appId: "1:1065673627817:web:e8aec052328369b81b31b8",
  measurementId: "G-4C462CHGG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);