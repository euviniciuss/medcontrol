import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-tZAIC_H6F5PiOVw6BhhpOMk0_yRWZjw",
  authDomain: "projectubs.firebaseapp.com",
  projectId: "projectubs",
  storageBucket: "projectubs.appspot.com",
  messagingSenderId: "783681760551",
  appId: "1:783681760551:web:b0970b92dadff0a7940d02"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
