import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgIRE1qmtxnxSm4YaFmIRgiJn6v4gi0bQ",
  authDomain: "portfoliosite-ea92a.firebaseapp.com",
  projectId: "portfoliosite-ea92a",
  storageBucket: "portfoliosite-ea92a.firebasestorage.app",
  messagingSenderId: "642985381374",
  appId: "1:642985381374:web:f6decce3e9ba083a0244af",
  measurementId: "G-VH820L9ES2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
