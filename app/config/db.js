import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfH5h9WtnYaiO8pdh-xid4HmaNGro34dQ",
  authDomain: "dondeesta-cde0e.firebaseapp.com",
  databaseURL: "https://dondeesta-cde0e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dondeesta-cde0e",
  storageBucket: "dondeesta-cde0e.appspot.com",
  messagingSenderId: "521717502848",
  appId: "1:521717502848:web:7036f33d20eb30ded7a765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
