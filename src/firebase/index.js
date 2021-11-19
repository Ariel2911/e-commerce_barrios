import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUPtbahUpN_mj3dr8kKkuKq8VuhO7i2h4",
  authDomain: "e-commercecoder45.firebaseapp.com",
  projectId: "e-commercecoder45",
  storageBucket: "e-commercecoder45.appspot.com",
  messagingSenderId: "657544483069",
  appId: "1:657544483069:web:f5bf7e0eb64800b4afae94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const db = getFirestore(app);