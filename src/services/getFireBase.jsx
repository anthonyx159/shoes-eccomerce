import firebase from "firebase"
import 'firebase/firestore'

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRoCcVb_Y65P5Vf6ikDCfuXqKzAPt4FZI",
  authDomain: "eccomerce-shoes.firebaseapp.com",
  projectId: "eccomerce-shoes",
  storageBucket: "eccomerce-shoes.appspot.com",
  messagingSenderId: "701066254829",
  appId: "1:701066254829:web:71972422ca9b55cff5afe4"
};

// Initialize Firebase
const app= firebase.initializeApp(firebaseConfig)

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}