// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';// Import Firestore correctly
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvRSjMLV1B-ipI6Md9l1x-WOvLEtEccKg",
  authDomain: "theluxuryqueen-43a8b.firebaseapp.com",
  projectId: "theluxuryqueen-43a8b",
  storageBucket: "theluxuryqueen-43a8b.appspot.com",
  messagingSenderId: "909425316078",
  appId: "1:909425316078:web:22523331570c4937fb63ff",
  measurementId: "G-FTN2YQ7Y4W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Proper way to initialize Firestore
const analytics = getAnalytics(app);

export { app, db }; 