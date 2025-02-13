// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNrWc416YSK2ZSujiXJd2NqKTI3FyEE5Q",
  authDomain: "soulsync-b831c.firebaseapp.com",
  projectId: "soulsync-b831c",
  storageBucket: "soulsync-b831c.firebasestorage.app",
  messagingSenderId: "538131092736",
  appId: "1:538131092736:web:5edd567a1c9fb2e3a0cfe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app