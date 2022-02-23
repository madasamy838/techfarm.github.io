import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJn5n4xRgzWPpXUIKlW5gNFCxGS6fFyY4",
    authDomain: "fir-3d1f0.firebaseapp.com",
    projectId: "fir-3d1f0",
    storageBucket: "fir-3d1f0.appspot.com",
    messagingSenderId: "287035640204",
    appId: "1:287035640204:web:23cd1ef8145d7a702d6ea9",
    measurementId: "G-D3SLJT644T"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);