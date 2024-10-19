// firebase.js

// Import the necessary Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjiQ9MwFouiDmSMMZcEXUj-npxMuOpH_E",
  authDomain: "simple-blog-120cd.firebaseapp.com",
  projectId: "simple-blog-120cd",
  storageBucket: "simple-blog-120cd.appspot.com",
  messagingSenderId: "413230403527",
  appId: "1:413230403527:web:1908bf9705ade0182253e2",
  measurementId: "G-5PFKD32XYM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export the database for use in other files
export { db };
