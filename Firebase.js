import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDdz7g-RGfvynm_iHx73HO-2qN-9k_HKsU",
    authDomain: "form-8d820.firebaseapp.com",
    projectId: "form-8d820",
    storageBucket: "form-8d820.appspot.com",
    messagingSenderId: "691917661651",
    appId: "1:691917661651:web:24e2f13d49231f83d07b26",
    measurementId: "G-VL9N8YPP1T"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

export { storage, db };
