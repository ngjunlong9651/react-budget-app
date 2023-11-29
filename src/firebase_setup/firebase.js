import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD16GKaa5ORPgh2fBps-ZNlTABb_lZPYrM",
  authDomain: "react-budget-151f4.firebaseapp.com",
  projectId: "react-budget-151f4",
  storageBucket: "react-budget-151f4.appspot.com",
  messagingSenderId: "542982804268",
  appId: "1:542982804268:web:7c6dccb676e14e6bfb1289",
  measurementId: "G-PHYP6SW054"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app;