import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-trip-generator-8dbab.firebaseapp.com",
  projectId: "ai-trip-generator-8dbab",
  storageBucket: "ai-trip-generator-8dbab.appspot.com",
  messagingSenderId: "382106833985",
  appId: "1:382106833985:web:26662de7a394b3abf262c0",
  measurementId: "G-E2FR3LG1K3"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
