

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTUKTDCnuXjtqSAiKlCLMdfgtlsUGtyvg",
  authDomain: "netflixgpt-eaa91.firebaseapp.com",
  projectId: "netflixgpt-eaa91",
  storageBucket: "netflixgpt-eaa91.appspot.com",
  messagingSenderId: "587545592749",
  appId: "1:587545592749:web:a773fe8f53bfb31e025724",
  measurementId: "G-QDDF4MKPXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


const auth = getAuth(app)


export{app,auth}