// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB70iHL4D6FMEaU_arI-nTsPGmxnkGB8-Y",
  authDomain: "zalo-app-fa512.firebaseapp.com",
  projectId: "zalo-app-fa512",
  storageBucket: "zalo-app-fa512.appspot.com",
  messagingSenderId: "1006222670727",
  appId: "1:1006222670727:web:02a1028edb5e012ef27122",
  measurementId: "G-QLJC40RHZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);