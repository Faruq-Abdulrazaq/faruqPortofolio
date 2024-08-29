import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASEAPIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASEAUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASEPROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASESTORTAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASEMESSAGEINGSEBDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASEAPPDI,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
