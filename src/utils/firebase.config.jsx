// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY ,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_ID ,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID
  apiKey: "AIzaSyDrlxc397-k6A_Q_qVikqc_ax-DClE60l4",
  authDomain: "universal-carwash.firebaseapp.com",
  projectId: "universal-carwash",
  storageBucket: "universal-carwash.appspot.com",
  messagingSenderId: "559845262805",
  appId: "1:559845262805:web:ae406857b3b781c672295c",
  measurementId: "G-GYXD17ECTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);