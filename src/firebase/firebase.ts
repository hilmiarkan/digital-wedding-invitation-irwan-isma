// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsOukrTW096Ki_1sXfQ0FaXV3_QsE55Zg",
  authDomain: "wedding-invitation-irwan-isma.firebaseapp.com",
  projectId: "wedding-invitation-irwan-isma",
  storageBucket: "wedding-invitation-irwan-isma.firebasestorage.app",
  messagingSenderId: "339006814612",
  appId: "1:339006814612:web:0a0c953703c0bf896ab781",
  measurementId: "G-YPEPWQEFTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Init Analytics (aman untuk SPA / Vite)
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}