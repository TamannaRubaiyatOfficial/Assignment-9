//DO NOT SHARE THIS CONFIG

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGEybzDZT6wLdytKgmb-8ryvaOdJq_ajY",
  authDomain: "warm-paws-58689.firebaseapp.com",
  projectId: "warm-paws-58689",
  storageBucket: "warm-paws-58689.firebasestorage.app",
  messagingSenderId: "218790665997",
  appId: "1:218790665997:web:e3db46d0c6199b53f19a44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Export Firebase Auth
export const auth = getAuth(app);

export default app;