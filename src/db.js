import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4N8DsnuHwXszAmsvCi2W8SontcpL09T4",
  authDomain: "nara-secret.firebaseapp.com",
  databaseURL: "https://nara-secret-default-rtdb.firebaseio.com",
  projectId: "nara-secret",
  storageBucket: "nara-secret.appspot.com",
  messagingSenderId: "823482644858",
  appId: "1:823482644858:web:3e01bb29e42eed95c53ec3",
  measurementId: "G-2B0XLKG9V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);