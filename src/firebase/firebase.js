import firebase from 'firebase/app'
// import 'firebase/storage'
import {getStorage} from 'firebase/storage'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBr6jEVnvnVBavEwVEjCUVfDh4755Lm2VM",
    authDomain: "diamond-jewelry-348008.firebaseapp.com",
    projectId: "diamond-jewelry-348008",
    storageBucket: "diamond-jewelry-348008.appspot.com",
    messagingSenderId: "633817129267",
    appId: "1:633817129267:web:f7970a87c43b11f6e25e46",
    measurementId: "G-N0NK9RFYW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app)