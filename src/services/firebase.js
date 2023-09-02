import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore'
import firebase from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyAzcaiDnk0RqA4E-ukxwRiOSiCFceKkJOs",
  authDomain: "todo-5df77.firebaseapp.com",
  projectId: "todo-5df77",
  storageBucket: "todo-5df77.appspot.com",
  messagingSenderId: "973892193953",
  appId: "1:973892193953:web:e0bc90ac324cf4f1fe6ae0",
  measurementId: "G-CMCMKVF4XT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider( )
export default app;

