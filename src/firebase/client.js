// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBALpLR9Wb-y1oH49r49Mbl418-b-Jr1qA",
  authDomain: "vite-e-shop-58175.firebaseapp.com",
  projectId: "vite-e-shop-58175",
  storageBucket: "vite-e-shop-58175.appspot.com",
  messagingSenderId: "824054313314",
  appId: "1:824054313314:web:a5b98ee1d60f70f1ddbc3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
