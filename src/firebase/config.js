// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClKmbuuUvRA6tVGZdcxFry-eguggTabpM",
    authDomain: "wylshop-9b466.firebaseapp.com",
    projectId: "wylshop-9b466",
    storageBucket: "wylshop-9b466.firebasestorage.app",
    messagingSenderId: "509974642842",
    appId: "1:509974642842:web:db0e057e75612a9c865f23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)