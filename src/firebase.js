import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAONPBzZNxpnOtiSQfDsxXgDn0g3D5Wrc",
  authDomain: "chat-c1e14.firebaseapp.com",
  projectId: "chat-c1e14",
  storageBucket: "chat-c1e14.appspot.com",
  messagingSenderId: "997122404263",
  appId: "1:997122404263:web:7323046a784b766ce91082",
  measurementId: "G-GNR7R6BNSX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();