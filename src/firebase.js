// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsoxVLBZjegyXmkXyYM8lti7a9NCxTQ4o",
  authDomain: "coffee-corner-5c1a1.firebaseapp.com",
  projectId: "coffee-corner-5c1a1",
  storageBucket: "coffee-corner-5c1a1.firebasestorage.app",
  messagingSenderId: "461479177109",
  appId: "1:461479177109:web:4828aa0d3083af9587e49c",
  measurementId: "G-0NKHX7VX8V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
