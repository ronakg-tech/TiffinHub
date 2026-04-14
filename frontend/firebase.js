// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "tiffinhub-2b64b.firebaseapp.com",
  projectId: "tiffinhub-2b64b",
storageBucket: "tiffinhub-2b64b.firebasestorage.app",
  messagingSenderId: "824240828245",
  appId: "1:824240828245:web:a512b805adea7d878509dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}