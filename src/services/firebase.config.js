import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7n4U7yLPVD4tiCpdenCL1Ak7ypdF6fDo",
    authDomain: "e-commerce-3d5a7.firebaseapp.com",
    projectId: "e-commerce-3d5a7",
    storageBucket: "e-commerce-3d5a7.appspot.com",
    messagingSenderId: "24643791545",
    appId: "1:24643791545:web:a47a3e1601f641df1f4968"
  };
  
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);