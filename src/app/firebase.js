// src/firebase.// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKHWPGfhwfF4iHSjBPue3PZy4_yhr3goE",
  authDomain: "barbershopbooking-5df43.firebaseapp.com",
  projectId: "barbershopbooking-5df43",
  storageBucket: "barbershopbooking-5df43.appspot.com",
  messagingSenderId: "960202251300",
  appId: "1:960202251300:web:bd723ce7e29beaf0d04cb1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };